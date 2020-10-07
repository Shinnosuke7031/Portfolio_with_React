import React, { FC } from 'react';
import { SiteDetailProps } from '../../types/props';
import styles from './template.module.css';

const ThisSiteDetail: FC<SiteDetailProps> = (props) => {

  const SiteDetail =  <ul className={styles.skills}>
                        <li style={{padding: '0',marginRight: '10px'}}>使用言語・ライブラリ：</li>
                        {props.skills.map((skill, index) => <li key={index} className={`${styles.skill} ${styles.fade}`}>
                          {skill}
                          <p className={styles.line}></p>
                        </li>
                        )}
                      </ul>;

  return (
    <div>
      <p>最初は、Reactを勉強し始めてから10日で制作したため、ディレクトリ構成やルーティングのことを全く考えていませんでした。</p>
      <p>別のアウトプットで新しいことを学んだら、リファクタリングを行い、技術力を高めていきます。</p>
      {SiteDetail}
    </div>
  );
}

export default ThisSiteDetail;