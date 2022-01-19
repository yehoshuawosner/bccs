# node-js-server-api-beaconcure

A Node.js app using [Express 4.17.2](http://expressjs.com/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
git clone git@github.com:heroku/node-js-sample.git # or clone your own fork
cd node-js-sample
npm install
npm start
npm run dev "Runs with NODEMON"
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Those are the api paths to use:

### Shows the files list           [ /files ]
### Shows the file content         [ /files/:fileName ]                         
### Shows the table information    [ /files/:fileName/tables/:tableTitle ]