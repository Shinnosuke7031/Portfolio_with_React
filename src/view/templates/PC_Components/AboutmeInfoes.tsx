import React, { FC, useState } from 'react';
import styles from './pc.module.css';

import { AboutmeProps } from '../../../types/props'

const AboutmeInfoes: FC<AboutmeProps> = (props) => {

  const items = props.items;

  const [detail, setDetail] = useState({ title: items[0].title, text: items[0].text });

  const handleOnMouseEnter = (title: string, text: string): void => {
    setDetail({ title: title, text: text });
  }

  const detail_info = <div>
  <h1> {detail.title} </h1>
  <p> {detail.text} </p>
</div>
  
  return(
    <div>
      <h1 className={styles.title}>About Me</h1>
      <ul className={styles.profiles}>
        {items.map((temp, index) => (
          index!==0 ?
          <li key={index} className={styles.profiles_content} onMouseEnter={()=>handleOnMouseEnter(temp.title, temp.text)}>
            <p>{temp.title}</p>
          </li> : 
          <li key={index} className={styles.profiles_content_last} onMouseEnter={()=>handleOnMouseEnter(temp.title, temp.text)}>
            <p>{temp.title}</p>
          </li>
        ))
        }
      </ul>
      
      <hr></hr>
      {detail_info}
      <hr></hr>
        
    </div>    
  );
}
export default AboutmeInfoes;

