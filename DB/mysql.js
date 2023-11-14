/*const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'biblioteca',
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    return;
  }
  console.log('Conexión a MySQL establecida');
});

module.exports = connection;*/

import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: 'localhost',
    port: 3306,
    database: 'biblioteca',
    user: 'root',
    password: ''
  }
});