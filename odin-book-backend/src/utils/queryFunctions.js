// const insertUsers = `
// INSERT INTO users (first_name, last_name, email, password, friends, posts)
// VALUES
//   ('John', 'Doe', 'john@example.com', 'hashed_password_1', ARRAY[2, 3], ARRAY[1]),
//   ('Jane', 'Smith', 'jane@example.com', 'hashed_password_2', ARRAY[1], ARRAY[2, 3]);
// `;

const insertUsers = `
INSERT INTO users (first_name, last_name, email, password, friends, posts)
VALUES
  ('Alice', 'Johnson', 'alice@example.com', 'hashed_password_3', ARRAY[4, 5], ARRAY[4, 5]),
  ('Bob', 'Williams', 'bob@example.com', 'hashed_password_4', ARRAY[3], ARRAY[6]);
`;

export default insertUsers;
