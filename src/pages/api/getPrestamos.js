import React from 'react'
import pool from '../../../DB/postgrestsql';


export default async function handler(req, res) {
    try {
      const result = await pool.query('SELECT * FROM prestamo_libros');
      console.log(result.rows);
      res.status(200).json(result.rows);
    } catch (err) {
      console.error('Error al obtener los préstamos:', err);
      res.status(500).send('Error al obtener los préstamos');
    }
  }