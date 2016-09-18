/**
*
* LikesList
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function LikesList() {
  return (
    <div className={styles.wrapper}>
      <h2><FormattedMessage {...messages.thanks} /></h2>
    </div>
  );
}

export default LikesList;
