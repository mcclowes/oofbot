# O O F B O T


Feel free to add more sounds

---

## Running the code

1) Clone the project

`git clone https://github.com/mcclowes/oofbot.git`

2) Make sure you're in the project

`cd oofbot`

3) Install dependencies

`npm install`

4) Authorise the app

Create a file called `.env` (just that, no file suffix). Copy the contents of example.env into it. Replace `YOUR_TOKEN` with an actual token (see setting up your Discord develop bot authorisation).

5) Run the app

`npm run start`

---

## Deploying to Heroku

Everytime you commit to this project, Heroku updates and runs the code on a live server. You don't need to do anything.

---

## Setting up your Discord develop bot authorisation

1) <https://discordapp.com/developers/applications/>

2) Click 'Create Application'

3) Copy the `Client ID`

4) Click on `Bot` in the sidebar

5) Click `Add Bot`, then `Yes, do that`

6) Authorise the bot on your discord server

Replace `YOUR_CLIENT_ID` in the link below

<https://discordapp.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot>

7) Copy the `Auth token` from the Bot's page

8) Add the Auth token into you `.env` file
