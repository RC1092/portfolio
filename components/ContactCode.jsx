import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'chaudharyrushi123@gmail.com',
    href: 'mailto:chaudharyrushi123@gmail.com',
  },
  {
    social: 'LinkedIn',
    link: 'www.linkedin.com/in/rushi-chaudhary',
    href: 'https://www.linkedin.com/in/rushi-chaudhary',
  },
  {
    social: 'GitHub',
    link: 'github.com/RC1092',
    href: 'https://github.com/RC1092',
  },
  {
    social: 'Instagram',
    link: 'www.instagram.com/_rushi_1092/',
    href: 'https://www.instagram.com/_rushi_1092/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
       
      <p className={styles.line}>
        <span>Rushi</span>&#58;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>socials</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
