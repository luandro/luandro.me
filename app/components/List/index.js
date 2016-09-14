/**
*
* List
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function List({ header }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        {header === 'design' &&
          <h1><FormattedMessage {...messages.header1} /></h1>
        }
        {header === 'dev' &&
          <h1><FormattedMessage {...messages.header2} /></h1>
        }
      </div>
    </div>
  );
}

List.propTypes = {
  header: React.PropTypes.string.isRequired,
};

export default List;
