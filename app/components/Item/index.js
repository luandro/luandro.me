/**
*
* Item
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function Item() {
  return (
    <div className={styles.item}>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default Item;
