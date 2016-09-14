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
    <div className={styles.likesList}>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default LikesList;
