const Discord = require ('discord.js');
require('dotenv').config()

// login to client
const bot = new Discord.Client();
bot.login(process.env.AUTH_TOKEN);

let isReady = false;

console.log(`Auth token: ${process.env.AUTH_TOKEN}`)

bot.on('ready', function (evt) {
  console.log('Connected to server');
  console.log(`Logged in as: ${bot.user.tag}`);
  isReady = true;
});

const soundboard = [
  ['oof', './sounds/oof.mp3'],
]

const verbose = process.argv.includes("--verbose");
const vPrint = (log) => {
  if(verbose) {
    console.log(log)
  }
}

const playSound = async (sound, voiceChannel) => {
  const connection = await voiceChannel.join();

  const dispatcher = connection.playFile(sound[1]);

  dispatcher.on("end", end => {
    setTimeout(() => {voiceChannel.leave()}, 1000);
    return;
  });
}

// when client receives message
bot.on("message", async message => {
  vPrint(`Received message ${message}`)

  if(isReady === true) { // check bot is not handling existing command
    const voiceChannel = message.member.voiceChannel;

    if (voiceChannel && voiceChannel.joinable) {
      const command = message.content.toLowerCase();

      for(let i = 0; i < soundboard.length; i++) {
        const sound = soundboard[i];

        if (isReady === true && command.match(new RegExp(`${sound[0]}`))) { // only handle "ahhh"
          vPrint(`Playing sound ${sound}`)

          isReady = false;
          await playSound(sound, voiceChannel);
        }
      }
    } else { // if not voice channel, fail
      vPrint(`User wasn't connected to voice channel`)

      isReady = true;
      return;
    }

    isReady = true;
  }
})