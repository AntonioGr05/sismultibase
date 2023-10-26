const { createPool } = require("mysql");
const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "biblioteca",
});

pool.getConnection((err) => {
  if(err){
    console.log("Error al conectar con BD");
  }
  console.log("Conectado a BD");
});

module.exports=pool;