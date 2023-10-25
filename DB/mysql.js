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