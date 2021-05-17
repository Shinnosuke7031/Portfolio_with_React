import React, { FC } from 'react';
import { SiteDetailProps } from '../../../types/props';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './mob.module.css';
import '../../css/slick.css';

const SiteDetailInfoes: FC<SiteDetailProps> = (props) => {

  const settings = props.settings;
  const imgs = props.imgs;

  const SiteDetail =  <ul className={styles.skills}>
                        <li style={{marginLeft: '-40px', fontWeight: 'bold', listStyle: 'none'}}>使用言語・ライブラリ</li>
                        {props.skills.map((skill, index) => <li key={index} className={`${styles.skill} ${styles.fade}`} style={{marginLeft: '-20px'}}>
                          {skill}
                        </li>
                        )}
                      </ul>;

  return (
    <div>
      <h1 className={styles.title}>About Site</h1>
      <p>最初は、Reactを勉強し始めてから10日で制作したため、ディレクトリ構成やルーティングのことを全く考えていませんでした。</p>
      <p>そのため、別のアウトプットで新しいことを学んだら、リファクタリングを行い、技術力を高めていきます。</p>
      {SiteDetail}
      <br />
      <Slider {...settings} className={styles.slick}>
          {imgs.map((img, index) =>
            <div key={index} className={styles.slickimg}>
              <img src={img.src} height="150px" />
              <p>{img.title}</p>
            </div>
          )}
        </Slider>
    </div>
  );
}

export default SiteDetailInfoes;