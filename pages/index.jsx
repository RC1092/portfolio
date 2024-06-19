import Link from 'next/link';
// import Illustration from '../components/Illustration';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Web</h1>
          <h1>Mobile</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Rushi Chaudhary</h1>
            <h6 className={styles.bio}>Full Stack Developer</h6>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Skill Set</h4>
                  <div className={styles.tags}>
                    
                    <span key='Python' className='Python'>
  Python
</span>
<span key='Cpp' className='Cpp'>
  C++
</span>
<span key='C' className='C'>
  C
</span>
<span key='JavaScript' className='JavaScript'>
  JavaScript
</span>
<span key='Dart' className='Dart'>
  Dart
</span>
<span key='GraphQL' className='GraphQL'>
  GraphQL
</span>
<span key='React' className='React'>
  React
</span>
<span key='Nodejs' className='Nodejs'>
  Node.js
</span>

<span key='Flask' className='Flask'>
  Flask
</span>
<span key='ExpressJS' className='ExpressJS'>
  Express.js
</span>
<span key='TensorFlow' className='TensorFlow'>
  TensorFlow
</span>
<span key='Keras' className='Keras'>
  Keras
</span>
<span key='SQLite' className='SQLite'>
  SQLite
</span>
<span key='Firebase' className='Firebase'>
  Firebase
</span>
<span key='Docker' className='Docker'>
  Docker
</span>
<span key='PennyLane' className='GraphQL'>
  PennyLane
</span>
<span key='Qiskit' className='Qiskit'>
  Qiskit
</span>
<span key='R' className='R'>
  R
</span>
<span key='HTML' className='HTML'>
  HTML
</span>
<span key='CSS' className='CSS'>
  CSS
</span>
<span key='Research' className='Research'>
                      Research
                    </span>
                    <span key='Linux' className='Linux'>
  Linux
</span>
<span key='Vercel' className='Vercel'>
  Vercel
</span>
<span key='Heroku' className='Heroku'>
  Heroku
</span>
<span key='AWS' className='AWS'>
  AWS
</span>
<span key='SocketIO' className='SocketIO'>
  Socket.IO
</span>

                
      
                   
                  </div>
                </div>
              </div>
            </div>
            <Link href="/resume">
              <button className={styles.button}>Resume</button>
            </Link>
            {/* <Link href="/projects">
              <button className={styles.button}>View Projects</button>
            </Link> */}
            <Link href="/contact">
              <button className={styles.outlined}>Contact</button>
            </Link>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
          <div className={styles.right}>
            <div className={styles.picture_boader}>
              <Image
                className={styles.picture}
                src="/me2.png"
                width={300}
                height={300}
                alt="Rushi' Picture"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
