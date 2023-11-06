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

export async function query(q, values){
  try {
    const results = await db.query(q, values);
    await db.end();
    return results;
  } catch (e) {
    return Error(e.message);
  }
}