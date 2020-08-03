what you should do once you get this template

steps

1. in folder that shows package.json you should ' npm install '

    > this will install all packages and create your node_modules

2. enter 'git init'

    > this will create a .git file which will allow you to connect your app to a repo on github

3. touch .env

    > this will create a .env file which holds your private environment variables and any other variables that you want to keep secret when you push your app to github

4. check the .gitignore to assure that you have '.env' and 'node_modules' set to be ignored when you push to a repo

    > this is so that you are not sharing your private variables from your .env file when you push to github as well as not posting your node modules folder which could contain static paths on your pc that you would not want others to know about

5. change the title of the app in the app.js

    > this is to change the title that appears in the tab of the web browser plus anywhere else you want to use the {{title}} global variable to display the title of your app

6. in mongoose-setup file you want to change the name of your database
    > if you don't change the name of your database then you will have all your apps linked to the same database and it may conflict if you have other collections with new collections that you are creating.
