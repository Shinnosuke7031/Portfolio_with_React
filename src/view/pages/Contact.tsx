import React, { FC } from 'react';
import MediaQuery from "react-responsive";
import styles from './pages.module.css';
import ContactInfoes from '../templates/PC_Components/ContactInfoes';
import ContactInfoesMob from '../templates/MobileComponents/ContactInfoesMob';

const Contact: FC<{}> = () => {
  
  return(
    <div>
      <h1 className={styles.title}>Contact</h1>
      
        <MediaQuery query="(min-width: 769px)">
          <ContactInfoes />
        </MediaQuery>

        <MediaQuery query="(max-width: 768px)">
          <ContactInfoesMob />
        </MediaQuery>

      </div>
    
  );
}
export default Contact;

