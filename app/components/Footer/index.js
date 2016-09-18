/**
*
* Footer
*
*/

import React from 'react';
import Marker from './marker.svg';
import styles from './styles.css';

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.location}>
        <img src={Marker} alt="local" />
        <span>em Alter do Chão, Pará</span>
      </div>
      <div className={styles.mail}>
        <a target="_blank" mailto="luandro@gmail.com">luandro@gmail.com</a>
      </div>
    </div>
  );
}

export default Footer;
