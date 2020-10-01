import React from 'react';
import styles from './pages.module.css';

const Aboutme=()=>{
  const items = [
    {title: '名前', text: 'Shinnosuke Iino'},
    {title: '出身', text: '栃木県'},
    {title: '年齢', text: '23'},
    {title: '勉強中', text: 'React.js,  TypeScript,  Next.js,  Redux'},
  ];
  
  return(
    <div>
      <h1 className={styles.title}>About Me</h1>
        <div>
          <ul style={{padding: "0 20px"}} >
            {items.map((temp)=>(
              <li key={temp.title}>
                <p>{temp.title}  :  {temp.text}</p>
              </li>
            ))
            }
          </ul>
          <div><hr></hr>
            <div>
              <p>私が所属する研究室のホームページを編集する機会があり，そこで初めてHTMLに出会いました．
                また，緊急事態宣言で外出できない期間は時間がたくさんあったので，HTML，CSSを勉強し始めました．</p>
            </div>
          </div>
        </div>
    </div>    
  );
}
export default Aboutme;

