import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Tabsbar.module.css';
import Image from 'next/image';

const Tab = ({ icon, filename, path, isActive, onClick }) => (
  <Link href={path}>
    <span className={`${styles.tab} ${isActive ? styles.active : ''}`} onClick={onClick}>
      <Image src={icon} alt={filename} width={16} height={16} />
      <span className={styles.filename}>{filename}</span>
    </span>
  </Link>
);

const Tabsbar = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(router.pathname);
  const [highlightStyle, setHighlightStyle] = useState({});
  const tabsRef = useRef({});

  const tabs = [
    { icon: "/react_icon.svg", filename: "home.jsx", path: "/" },
    { icon: "/html_icon.svg", filename: "resume.html", path: "/resume" },
    { icon: "/yml_icon.svg", filename: "contact.yml", path: "/contact" },
    { icon: "/py_icon.svg", filename: "projects.py", path: "/projects" },
    { icon: "/markdown_icon.svg", filename: "github.md", path: "/github" },
  ];

  useEffect(() => {
    function updateHighlight(path) {
      const tab = tabsRef.current[path];
      if (tab) {
        setHighlightStyle({
          left: tab.offsetLeft + 'px',
          width: tab.offsetWidth + 'px',
        });
      }
    }

    setActiveTab(router.pathname);
    updateHighlight(router.pathname);

    window.addEventListener('resize', () => updateHighlight(router.pathname));
    return () => window.removeEventListener('resize', () => updateHighlight(router.pathname));
  }, [router.pathname]);

  const handleTabClick = (path) => {
    setActiveTab(path);
  };

  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <span key={tab.path} ref={(el) => (tabsRef.current[tab.path] = el)}>
          <Tab
            icon={tab.icon}
            filename={tab.filename}
            path={tab.path}
            isActive={activeTab === tab.path}
            onClick={() => handleTabClick(tab.path)}
          />
        </span>
      ))}
      <span className={styles.highlight} style={highlightStyle} />
    </div>
  );
};

export default Tabsbar;