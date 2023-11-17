import pool from '../../../DB/postgrestsql';
import { query } from '../../../DB/mysql';
import React from 'react'

export default async function handler(req, res) {
    const { id_libro, id_usuario } = req.body;
    try {
        const result = await pool.query(`SELECT realizar_prestamo(${id_libro}, ${id_usuario}) AS mensaje`);
        const results = await query(`CALL putLibros(${id_libro})`);
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
}