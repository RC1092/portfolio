import styles from '../styles/ResumePage.module.css';
import Image from 'next/image';

const myResume = './Resume.pdf';

const ResumePage = () => {
  return (
    <center>
      <h3>Resume (<a href={myResume} className={styles.underline} download="Resume-ChaudharyRushi.pdf">Download</a>)</h3>
      <br />
      <div className={styles.pdfContainer}>
        <Image src="./resume.jpg" 
           height={1100}
           width={860}
           
        />
     
          
      </div>
    </center>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Resume' },
  };
}

export default ResumePage;
