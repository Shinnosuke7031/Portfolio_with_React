import React, { FC, useState } from 'react';

import { AboutmeProps } from '../../../types/props'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './pc.module.css';
import '../../css/slick.css';

const AboutmeInfoes: FC<AboutmeProps> = (props) => {

  const items = props.items;
  const settings = props.settings;
  const imgs = props.imgs;

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

      <br />
      <div>
        <Slider {...settings} className={styles.slick}>
          {imgs.map((img, index) =>
            <div key={index} className={styles.slickimg}>
              <img src={img.src} height="150px" />
              <p>{img.title}</p>
            </div>
          )}
        </Slider>
      </div>
        
    </div>    
  );
}
export default AboutmeInfoes;

