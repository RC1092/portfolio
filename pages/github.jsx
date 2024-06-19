 import Image from 'next/image';

import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';
import { getGitData } from './api/getRepos';
import { getUserData } from './api/getUser';

const GithubPage = ({ repos, user }) => {
  // console.log(repos);
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };
 
  return (
    <>
      <a href="https://github.com/RC1092" target="_blank" rel="noopener" className={styles.no_color}>
        <div className={styles.user}>
          <div>
            <Image
              src='./me.jpg'
              className={styles.avatar}
              alt={user.login}
              width={50}
              height={50}
            />
            <h3 className={styles.username}>{user.login}</h3>
          </div>
          <div>
            <h3>{user.public_repos} repos</h3>
          </div>
         
        </div>
      </a>
      <div> <center><h3>Repositories</h3></center></div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
     
    </>
  );
};

export async function getStaticProps() {
  const user = getUserData();
  
 
  let repos = getGitData();


  return {
    props: { title: 'GitHub', repos, user }
  };
}

export default GithubPage;
