import React, { FC } from 'react';
import styles from './mob.module.css';
import { SiteDetailProps } from '../../../types/props';

const SiteDetailInfoes: FC<SiteDetailProps> = (props) => {

  const SiteDetail =  <ul className={styles.skills}>
                        <li style={{fontWeight: 'bold'}}>使用言語・ライブラリ</li>
                        {props.skills.map((skill, index) => <li key={index} className={`${styles.skill} ${styles.fade}`}>
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
    </div>
  );
}

export default SiteDetailInfoes;