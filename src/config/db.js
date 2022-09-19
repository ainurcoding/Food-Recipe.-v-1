// database connection

// declare library

const pg = require('pg');

// const db = new pg.Pool({
//   host: 'localhost',
//   user: 'postgres',
//   password: '123456789',
//   database: 'db_food_recipe',
//   port: 5432,
// });

  //WITH env version
const db = new pg.Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log('database connected');
});

module.exports = db;
