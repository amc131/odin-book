import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: process.env.USER_NAME,
  host: process.env.HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
});

console.log(pool);

export default pool;
