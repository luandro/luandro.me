/**
*
* List
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function List() {
  return (
    <div className={styles.list}>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default List;
