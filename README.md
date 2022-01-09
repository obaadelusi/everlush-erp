## Everlush ERP

An Enterprise Resource Planning application created for small business owners to record business transactions and keep track of empolyees. Built with NodeJS, Express, React, MongoDB and Bootstrap.

## 🚨Project Status

🛠 In development...

`/products`, `/stakeholders`, `customers`, `suppliers`, `/transactions`, `sales`, `purchases` routes and APIs have been created. Next, I'll be moving the UI from EJS to React.

## 📸Project Screen Shot

![All products page](/server/public/images/erp-product-page.jpg 'ERP Software')

## ⚙ Installation and Setup Instructions

Clone this repository. You will need `node` and `npm` installed globally on your machine.

## Available scripts

### Backend `cd server`

To run the backend, run `cd server` on your terminal and run `npm install`.\
Then `npm run dev`.\
Server is on PORT :316 at `http://localhost:316`

### Frontend `cd client`

To get started with the frontend, run `cd client` on your terminal and run `npm install`\
Then `npm start`.\
Frontend is on PORT :3000 at `http://localhost:3000`

## 😎 Reflection

Everlush ERP is a side project I am building to help small businesses keep records of the business activities. Current project goals include using technologies learned to bootstrap the project and create an MVP.

Originally I wanted to build an ERP application for my mum's SME business called Everlush Limited. I started this process by creating the database models using MongooseJs and the MongoDB CLI, then creating routes with ExpressJS to access seeded data, and adding Bootstrap classes to EJS templates for basic styling.

The technologies I currently use in this project are `EJS`, `Bootstrap`, `NodeJs`, `ExpressJS`, `MongoDB`, and React. I chose to use the EJS layout to minimize effort while setting up APIs initial setup and invest more time diving into the technical parts. After my initial commit to GitHub, I deployed the project on Heroku due to its ease of setup.

In the next iterations, I plan on creating the other important routes, adding authentication, handling errors and eventually using React to improve the UI.
