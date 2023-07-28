export const createUserTable = `
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR DEFAULT '',
  message VARCHAR NOT NULL
)
`;

export const insertUsers = `
INSERT INTO users (first_name, last_name, email, password, friends, posts)
VALUES
  ('John', 'Doe', 'john@example.com', 'hashed_password_1', ARRAY[2, 3], ARRAY[1]),
  ('Jane', 'Smith', 'jane@example.com', 'hashed_password_2', ARRAY[1], ARRAY[2, 3]);
`;

export const dropUsersTable = `
DROP TABLE IF EXISTS users;
`;
