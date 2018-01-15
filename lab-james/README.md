## to use the app you will need a .env file on your client side with the following:

SERVER_URL='http://localhost:3000'

## you should not need a .env file on your server side, but if it is not working you can add one with the following to see if it works:

PORT=3000
MONGODB_URI='mongodb://localhost:27017/lab36'
APP_SECRET='mySecret'

## this app is just a log in screen.  when you create a user or log in with an existing user the screen will change to a welcome with the username you provided.

## my database for mongo is set up with the default directory in the systems root files.  if you cannot connect to your database try changing the db's URI to what works for your system.
