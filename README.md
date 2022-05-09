# Kelp

Kelp is a soft clone of [Yelp](https://www.yelp.com/) where users can share their favorite beach destinations with other usersand write reviews.

# Index

|
[MVP Feature List](https://github.com/itsmaica/Kelp/wiki/Feature-List)|
[Database Schema](https://github.com/itsmaica/Kelp/wiki/DB-Schema) |

# Technologies Used

<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height=50/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/><img src="https://camo.githubusercontent.com/dc9e7e657b4cd5ba7d819d1a9ce61434bd0ddbb94287d7476b186bd783b62279/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6769742f6769742d6f726967696e616c2e737667" height=40/><img src="https://camo.githubusercontent.com/5fa137d222dde7b69acd22c6572a065ce3656e6ffa1f5e88c1b5c7a935af3cc6/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7673636f64652f7673636f64652d6f726967696e616c2e737667" height=40/><img src="https://camo.githubusercontent.com/2898cf1a75ec9f9cf432608a018c3716f505f7e66afff46a0f34754b0542fdf0/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f612f61372f52656163742d69636f6e2e7376672f3233303070782d52656163742d69636f6e2e7376672e706e67" height=40/><img src="https://camo.githubusercontent.com/bdc7538096526da40b0e1e252cb5c790b07b8320b222708c708927d531a6206f/68747470733a2f2f7365656b6c6f676f2e636f6d2f696d616765732f522f72656475782d6c6f676f2d394341363833364331322d7365656b6c6f676f2e636f6d2e706e67" height=40/>

# Getting Started

1. Clone this reposity

  `https://github.com/itsmaica/Kelp.git`
  
2. Install denpendencies into the Backed and the Frontend by making a terminal for each one and then run the following:

  `npm isntall`

3. Create a .env file based on the .env.example included.

4. Set up your database with information from your .env and then run the following to create your database, migrate, and seed: 
5. 
   `npx dotenv sequelize db:create`
   `npx dotenv sequelize db:migrate` 
   `npx dotenv sequelize db:seed:all``

Create database and migrate models

npx dotenv sequelize db:create && npx dotenv sequelize db:migrate && npx dotenv sequelize db:seed:all

Setup your AWS bucket using AWS setup, change the bucket name to your bucket name in awsS3.js file, and update your .env file with AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY

Start the app for both backend and frontend using:

npm start

You can use the Demo user or create an account

