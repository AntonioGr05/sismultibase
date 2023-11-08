import { query } from '../../../DB/mysql';

export default async function getLibros(req, res) {
  try {
   const results = await query('SELECT * FROM libro');
   console.log(results);
    res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}