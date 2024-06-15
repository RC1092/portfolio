import data from './sde-projects.json';

export const getSDEProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = getSDEProjects();
  res.json(projects);
};
