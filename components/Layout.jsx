import { useState, useEffect } from 'react';
import Titlebar from '../components/Titlebar';
import Sidebar from '../components/Sidebar';
import Explorer from '../components/Explorer';
import Bottombar from '../components/Bottombar';
import Tabsbar from './Tabsbar';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(children);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setCurrentPage(children);
      setIsTransitioning(false);
    }, 300); // This should match the transition duration in CSS

    return () => clearTimeout(timer);
  }, [children]);

  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: '100%' }}>
          <Tabsbar />
          <main className={`${styles.content} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
            {currentPage}
          </main>
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default Layout;