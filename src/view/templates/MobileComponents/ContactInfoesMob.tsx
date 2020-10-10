import React, { FC } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from './mob.module.css';

const ContactInfoesMob: FC<{}> = () => {

  return (
    <React.Fragment>
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.contact}>

        <div className={styles.mail}>
          <FontAwesomeIcon icon={faEnvelope}/>
          <a className={`${styles.show_line_from_left} ${styles.change_color_from_left}`} href="mailto:8120505@ed.tus.ac.jp">8120505@ed.tus.ac.jp</a>
        </div>
        <hr/>
        <div>
          <a href="https://github.com/Shinnosuke7031"><i className={`fa fa-github fa-2x ${styles.contact_icon}`}></i> </a>
          <a href="https://twitter.com/web7031boushi"><i className={`fa fa-twitter fa-2x ${styles.contact_icon}`}></i> </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactInfoesMob;