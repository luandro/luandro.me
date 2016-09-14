/**
*
* Like
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function Like() {
  return (
    <div className={styles.like}>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default Like;