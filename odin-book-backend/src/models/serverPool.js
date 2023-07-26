import { Pool } from 'pg';
import dotenv from 'dotenv';

const connectionString = process.env.CONNECTION_STRING;
dotenv.config();

const pool = new Pool({ connectionString });

export default pool;
