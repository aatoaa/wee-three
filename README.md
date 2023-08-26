# Wee Three

Wee Three is a gallery app where you can browse 3D objects with different environmental setups.

### Installing

In the `client` folder
run `npm i`

In the `server` folder
run `npm i`

Have a MongoDB running locally and set the URL in `server/.env` file DB_URL constant. The example is provided in the `.env.example` file.

To populate example data to the DB you can run `node seeder/seedObjects.js` in the `server` folder.

### Starting

In the `client` folder `npm run dev`

In the `server` folder `nodemon`

### Tech Stack

React, TypeScript, Vite, React Three Fiber, Node, Express, MongoDB, Mongoose

