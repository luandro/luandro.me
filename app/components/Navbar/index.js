/**
*
* Navbar
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function Navbar({ sticky }) {
  return (
    <div className={styles.wrapper} style={sticky ? { position: 'fixed', top: 0 } : { position: 'static' }}>
      <div className={styles.container}>
        <a href="#design"><FormattedMessage {...messages.item1} /></a>
        <a href="#development"><FormattedMessage {...messages.item2} /></a>
        <a href="#like"><FormattedMessage {...messages.item3} /></a>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  sticky: React.PropTypes.bool.isRequired,
};

export default Navbar;
