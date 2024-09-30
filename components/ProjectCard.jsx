import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={project.image}
          height={200}
          width={245.75}
          sizes="(max-width: 600px) 100vw, 600px"
          alt={project.name} 
          className={styles.image}
        />
        <div className={styles.overlay}>
          <p>{project.description}</p>
        </div>
      </div>
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={tag.split(" ").join("")}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cta}>
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Demo
            </a>
          )}
          {project.scholar && (
            <a
              href={project.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Paper
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;