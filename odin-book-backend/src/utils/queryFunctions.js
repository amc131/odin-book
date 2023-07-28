// import pool from '../models/serverPool';

const insertUsers = `
INSERT INTO users (first_name, last_name, email, password, friends, posts)
VALUES
  ('John', 'Doe', 'john@example.com', 'hashed_password_1', ARRAY[2, 3], ARRAY[1]),
  ('Jane', 'Smith', 'jane@example.com', 'hashed_password_2', ARRAY[1], ARRAY[2, 3]);
`;

export default insertUsers;
