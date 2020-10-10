import React, { FC, useEffect, useState } from 'react';
import styles from './mob.module.css';

import { AboutmeProps } from '../../../types/props';

const InitialClassName = styles.profiles_content;
const FirstClassName = styles.profiles_content_0;
const OnClickClassName = styles.profilesOnClick;

const AboutmeInfoesMob: FC<AboutmeProps> = (props) => {

  const items = props.items;
  const InitialClassNames: string[] = Array(items.length - 1).fill(InitialClassName);

  const [detail, setDetail] = useState({ title: items[0].title, text: items[0].text });
  const [classNames, setClassNames] = useState<string[]>([FirstClassName, ...InitialClassNames]);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const handleOnClick = (title: string, text: string, index: number): void => {
    setDetail({ title: title, text: text });
    setHoveredIndex(index);
    if (index === 0) {
      setClassNames([
        `${FirstClassName} ${OnClickClassName}`,
        ...InitialClassNames
      ])
    } else if (index === items.length - 1) {
      const NormalNames = InitialClassNames.filter((unused, Index) => Index !== index - 1);
      setClassNames([
        FirstClassName,
        ...NormalNames,
        `${InitialClassName} ${OnClickClassName}`
      ]);
    } else {
      let CurrentClassNames = classNames;
      CurrentClassNames[hoveredIndex] = InitialClassName;
      CurrentClassNames[0] = FirstClassName;
      const NumberOfFrontElement = index;
      const FrontElementClassName = CurrentClassNames.filter((unused, Index) => Index < NumberOfFrontElement);
      const RearElementClassName = CurrentClassNames.filter((unused, Index) => Index > NumberOfFrontElement);
      setClassNames([
        ...FrontElementClassName,
        `${InitialClassName} ${OnClickClassName}`,
        ...RearElementClassName
      ])
    }
    
  }

  useEffect(() => {
    setClassNames([
      `${FirstClassName} ${OnClickClassName}`,
      InitialClassName, InitialClassName, InitialClassName, InitialClassName
    ])
  }, []);


  const detail_info = <div><p> {detail.text} </p></div>
  
  return(
    <div>

      <h1 className={styles.title}>About Me</h1>
          
      <ul className={styles.profiles}>
        {items.map((temp, index) => (
          <li key={index} className={classNames[index]} onClick={()=>handleOnClick(temp.title, temp.text, index)}>
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
export default AboutmeInfoesMob;

