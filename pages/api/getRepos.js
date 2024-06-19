import data from './gitdata.json';

export const getGitData = () => {
  return data;
};

export default (req, res) => {
  const repos = getGitData();
  res.json(repos);
};
