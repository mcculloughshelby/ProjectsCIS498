import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  // your connection config
});

export default pool;
