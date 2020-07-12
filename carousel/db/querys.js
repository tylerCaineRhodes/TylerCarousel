const mysql = require('mysql');

require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
  database: 'Wowes'
});

connection.connect((err) => {
  if(err){
    console.log('something went wrong');
  } else {
    console.log('now connected to your database')
  }
});

const getAllData = (callback) => {
  connection.query(`select * from items`, (err, data) => {
    if(err){
      console.log('something went wrong in db trying to get all data')
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
}

const getCategories = (id, callback) => {
  connection.query(`select * from items where category = (select category from items where id = ?)`, [ id ], (err, data) => {
    if(err){
      console.log('something went wrong with getting categories in db')
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
}

const getItem = (id, callback) => {
  connection.query(`select * from items where id = ?`,[ id ], (err, data) => {
    if(err){
      console.log('something went wrong with getting categories in db')
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
}

module.exports = {getAllData, getCategories, getItem}
