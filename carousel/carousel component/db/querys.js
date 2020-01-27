const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'Wowes'
});

connection.connect(err => {
  if(err){
    console.log('something wrong with connecting to the database')
  } else {
    console.log('now connected to your database')
  }
})


