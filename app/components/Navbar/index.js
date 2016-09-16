/**
*
* Navbar
*
*/

import React from 'react';
import { Link } from 'react-scroll';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function Navbar({ sticky }) {
  return (
    <div className={styles.wrapper} style={sticky ? { position: 'fixed', top: 0 } : { position: 'static' }}>
      <div className={styles.container}>
        <Link to="design" spy smooth duration={500}><FormattedMessage {...messages.item1} /></Link>
        <Link to="development" spy smooth duration={500}><FormattedMessage {...messages.item2} /></Link>
        <Link to="like" spy smooth duration={500}><FormattedMessage {...messages.item3} /></Link>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  sticky: React.PropTypes.bool.isRequired,
};

export default Navbar;
