# Wee Three

![wee-three](https://github.com/aatoaa/wee-three/assets/130067118/b9ea4452-a173-4cde-b75a-a0a5aa8b0adb)

Wee Three is a gallery app where you can browse 3D objects with different environmental setups.

### Installing

In the `client` folder
run `npm i`

In the `server` folder
run `npm i`

Have a MongoDB running locally and set the URL in `server/.env` file DB_URL constant. The example is provided in the `.env.example` file.

`npm run setup` => Runs the seeder using `nodemon`, adding the default objects to the database. Seeder can also be run manually with node from the `server/seeder` folder.

`npm run start` => Runs the backend server 

### Starting

In the `client` folder `npm run dev`

In the `server` folder `nodemon`

### Tech Stack

React, TypeScript, Vite, React Three Fiber, Node, Express, MongoDB, Mongoose

