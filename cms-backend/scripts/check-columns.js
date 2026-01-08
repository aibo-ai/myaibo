const { Client } = require('pg');

(async () => {
  try {
    const conn = process.env.DATABASE_URL;
    if (!conn) throw new Error('DATABASE_URL required');
    const client = new Client({ connectionString: conn, ssl: { rejectUnauthorized: false, require: true } });
    await client.connect();
    const res = await client.query("SELECT column_name, data_type, udt_name FROM information_schema.columns WHERE table_name='blogs' AND column_name IN ('tags','categories');");
    console.log(JSON.stringify(res.rows, null, 2));
    await client.end();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
