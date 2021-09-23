const express = require('express');
const routes = require('./routes');
// import sequelize connection

const seedall = require('./seeds');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server



app.listen(PORT, () => {
  seedall();
  console.log(`App listening on port ${PORT}!`);
});




