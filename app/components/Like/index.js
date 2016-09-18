/**
*
* Like
*
*/

import React from 'react';
import LikeIcon from './like.svg';
import Divider from './divider.svg';

import styles from './styles.css';

function Like() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top} />
      <div className={styles.button}>
        <img src={LikeIcon} alt="Curtir" />
        <span>Gostei!</span>
      </div>
      <div className={styles.bottom} />
      <img src={Divider} alt="" />
    </div>
  );
}

export default Like;
