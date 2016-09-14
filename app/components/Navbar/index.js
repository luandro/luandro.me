/**
*
* Navbar
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default Navbar;
