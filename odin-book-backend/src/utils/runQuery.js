import pool from '../models/serverPool';
import insertUsers from './queryFunctions';

(async () => {
  try {
    console.log('Inserting users...');
    await pool.query(insertUsers);
    console.log('Users inserted');
  } catch (error) {
    console.log('Error:', error.message);
  }
})();
