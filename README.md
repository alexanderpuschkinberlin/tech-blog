# Tech-Blog

This full stack application is a blog system. Users can register to be able to post content and comment on existing posts.
A database is used to store all relevant data.

## Relevant Links

- [Deployed Application on heroku](https://evening-waters-69184.herokuapp.com/)
- [Github Repo](https://github.com/alexanderpuschkinberlin/tech-blog)

## Screenshot

<img src=public/img/tech-blog-screenshot.png>

## Technologies

Project is created with

- Javascript
- Node.js
- Sequelize
- MySQL2
- Express
- Dotenv
- connect-session-sequelize
- Express-Handlebars
- bcrypt

## Run the application on your local machine

In order to use this application on your computer follow these steps:

- Clone the application on your computer
- Make sure you have a mysql database installed
- Initiate the npm modules by installing the dependencies. Use the following commands:

```terminal
npm init --y
```

and

```terminal
npm install express sequelize mysql2 dotenv bcrypt express-session express-handlebars connect-session-sequelize
```

- Make sure to create an .env file within the application's root folder containing your local database credentials (DB_NAME="tech_blog", DB_USER="root", DB_PW= "xylz123")

- In the applications's path open the mysql instance and use those commands:

```terminal
source db/schema.sql
```

and

```terminal
use tech_blog
```

- Now exit mysql, return to the terminal and run those commands:

```terminal
node seeds
```

```terminal
node server.js
```

- Finally open this url in your browser: http://localhost:3001

---

© 2022 Alexander Puschkin | All Rights Reserved.
