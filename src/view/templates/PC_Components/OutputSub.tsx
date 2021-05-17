import React, { FC } from 'react';
import { PortfolioProps } from '../../../types/props';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './pc.module.css';
import '../../css/slick.css';

const OutputSub: FC<PortfolioProps> = (props) => {
  const contents = props.contents;
  const settings = props.settings;

  return (
    <React.Fragment>
      <h1 className={styles.title}>Output</h1>
      <div className={styles.content_box_2}>
        <Slider {...settings}>
          {contents.map((el, index) =>
            <div key={index}>
              <h1>{ el.name }</h1>
              <p>{ el.text }</p>
              <a href={el.url} target="_blank" rel="noopener noreferrer" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <img alt={el.name} src={el.img1} style={{width: "350px", height: "250px", margin: '10px'}} />
                <img alt={el.name} src={el.img2} style={{width: "350px", height: "250px", margin: '10px'}} />
              </a>
              {/* <p>{img.title}</p> */}
            </div>
          )}
        </Slider>
        {/* <h1>{ content.name }</h1>
        <p>{ content.text }</p>
        <a href={content.url} target="_blank" rel="noopener noreferrer">
          <img alt={content.name} src={content.img1} style={{width: "400px", height: "266px", margin: '10px'}}/>
        </a>
        <div className={styles.back_icon} onClick={onClickBack}><NavigateBeforeIcon style={{fontSize: '100px'}}/></div>
        <div className={styles.next_icon} onClick={onClickNext}><NavigateNextIcon style={{fontSize: '100px'}}/></div> */}
      </div>
      <br />
    </React.Fragment>
  );
}

export default OutputSub;