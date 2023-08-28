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

- [React](https://github.com/facebook/react) - [TypeScript](https://github.com/microsoft/TypeScript) - [Vite](https://github.com/vitejs/vite)
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) - [Three.js](https://github.com/mrdoob/three.js)
- [Node](https://github.com/nodejs/node) - [Express](https://github.com/expressjs/express)
- [MongoDB](https://github.com/mongodb/mongo) - [Mongoose](https://github.com/Automattic/mongoose)

### Author

- Arto Lahtinen - [GitHub](https://github.com/aatoaa) - [LinkedIn](https://www.linkedin.com/in/arto-l/)
