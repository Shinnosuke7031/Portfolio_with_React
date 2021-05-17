import React, { FC } from 'react';
import { PortfolioProps } from '../../../types/props';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './pc.module.css';
import '../../css/slick.css';

const Output: FC<PortfolioProps> = (props) => {
  const contents = props.contents;
  const settings = props.settings;

  return (
    <React.Fragment>
      <h1 className={styles.title}>Output</h1>
      <div className={styles.content_box}>
        <Slider {...settings}>
          {contents.map((el, index) =>
            <div key={index}>
              <h1>{ el.name }</h1>
              <p>{ el.text }</p>
              <a href={el.url} target="_blank" rel="noopener noreferrer" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img alt={el.name} src={el.img1} style={{width: "350px", height: "250px", margin: '10px'}} />
                <img alt={el.name} src={el.img2} style={{width: "350px", height: "250px", margin: '10px'}} />
              </a>
              {/* <p>{img.title}</p> */}
            </div>
          )}
        </Slider>
      </div>
    </React.Fragment>
  );
}

export default Output;