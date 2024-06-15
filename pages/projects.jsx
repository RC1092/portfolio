import ProjectCard from '../components/ProjectCard';
import { getMLProjects } from './api/ml-projects';
import { getSDEProjects } from './api/sde-projects';
import { getMiscProjects } from './api/misc-projects';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ sde_projects, ml_projects, misc_projects }) => {
  return (
    <>
      <h3>Open Source Projects</h3>
      <br/>
      <center><h4>Web and Mobile Applications</h4></center>
      <hr/>
      <div className={styles.container}>
        {sde_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <br/>
     
      <center><h4>Machine Learning</h4></center>
      <hr/>
      <div className={styles.container}>
        {ml_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <br/>
      <center><h4>Misc Projects</h4></center>
      <hr/>
      <div className={styles.container}>
        {misc_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const ml_projects = getMLProjects();
  const sde_projects= getSDEProjects();

  const misc_projects = getMiscProjects();

  return {
    props: { title: 'Projects', sde_projects, ml_projects, misc_projects },
  };
}

export default ProjectsPage;
