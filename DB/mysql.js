import mysql from 'serverless-mysql';

const db = mysql({
    config: {
      host: '25.51.102.222',
      port: 3309,
      database: 'biblioteca',
      user: 'fidel',
      password: 'stoploki20'
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