import React, { FC } from 'react';
import { PortfolioProps } from '../../../types/props';
import styles from './pc.module.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const OutputSub: FC<PortfolioProps> = (props) => {
  const content = props.content;
  const onClickNext = props.onClickNext;
  const onClickBack = props.onClickBack;

  return (
    <React.Fragment>
      <h1 className={styles.title}>Output</h1>
      <div className={styles.content_box_2}>
        <h1>{ content.name }</h1>
        <p>{ content.text }</p>
        <a href={content.url} target="_blank" rel="noopener noreferrer">
          <img alt={content.name} src={content.img1} style={{width: "400px", height: "266px", margin: '10px'}}/>
        </a>
        <div className={styles.back_icon} onClick={onClickBack}><NavigateBeforeIcon style={{fontSize: '100px'}}/></div>
        <div className={styles.next_icon} onClick={onClickNext}><NavigateNextIcon style={{fontSize: '100px'}}/></div>
      </div>
    </React.Fragment>
  );
}

export default OutputSub;