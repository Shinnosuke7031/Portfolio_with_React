import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";//これでもFontAwesome使える
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import MediaQuery from "react-responsive";
import styles from './pages.module.css';

const Contact=()=>{
  
  return(
    <div>
      <h1 className={styles.title}>Contact</h1>
        <div className={styles.contact}>
          <MediaQuery query="(min-width: 769px)">
            <div className={styles.mail}>
              <FontAwesomeIcon icon={faEnvelope}/>
              <a className={`${styles.show_line_from_left} ${styles.change_color_from_left}`} href="mailto:8120505@ed.tus.ac.jp">8120505@ed.tus.ac.jp</a>
            </div>
          </MediaQuery>
          <MediaQuery query="(max-width: 768px)">
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:8120505@ed.tus.ac.jp">8120505@ed.tus.ac.jp</a>             
            </div>
          </MediaQuery>
            
            <hr/>
            <div>
              <a href="https://github.com/Shinnosuke7031"><i className={`fa fa-github fa-2x ${styles.contact_icon}`}></i> </a>
              <a href="https://twitter.com/web7031boushi"><i className={`fa fa-twitter fa-2x ${styles.contact_icon}`}></i> </a>
            </div>
        </div>
    </div>    
  );
}
export default Contact;
