import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";//これでもFontAwesome使える
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import MediaQuery from "react-responsive";
import styles from './pages.module.css';

const Contact=()=>{
  
  return(
    <div>
      <h1 className={styles.title}>Contact</h1>
        <div>
          <MediaQuery query="(min-width: 769px)">
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>8120505@ed.tus.ac.jp</p>             
            </div>
          </MediaQuery>
          <MediaQuery query="(max-width: 768px)">
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>8120505@ed.tus.ac.jp</p>             
            </div>
          </MediaQuery>
            
            <hr/>
            <div>
              <a href="https://github.com/Shinnosuke7031"><i className="fa fa-github fa-2x" style={{color: "black"}}></i> </a>
              <a href="https://twitter.com/web7031boushi"><i className="fa fa-twitter fa-2x" style={{color: "black"}}></i> </a>
            </div>
        </div>
    </div>    
  );
}
export default Contact;

