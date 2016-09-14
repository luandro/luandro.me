/**
*
* LikesItem
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function LikesItem() {
  return (
    <div className={styles.likesItem}>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default LikesItem;
