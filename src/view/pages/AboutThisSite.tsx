import React, { FC } from 'react';
import styles from './pages.module.css';
import ThisSiteDetail from '../templates/ThisSiteDetail';

const skills = ['React.js', 'TypeScript', 'CSS Module', 'React Router', 'Material UI'];

const AboutThisSite: FC<{}> = () => {

  return (
    <div>
      <h1 className={styles.title}>このサイトについて</h1>
      <ThisSiteDetail skills={skills}/>
    </div>
  );
}

export default AboutThisSite;