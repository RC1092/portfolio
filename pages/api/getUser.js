import data from './userData.json';

export const getUserData = () => {
  return data;
};

export default (req, res) => {
  const user = getUserData();
  res.json(user);
};
