import Model from '../models/models';

const userModel = new Model('users');

const usersPage = async (_req, res) => {
  try {
    const data = await userModel.select('first_name, last_name, email');
    res.status(200).json({ users: data.rows });
  } catch (err) {
    res.status(500).json({ error: err.stack });
  }
};

export default usersPage;
