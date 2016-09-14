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
      {header === 'design' &&
        <FormattedMessage {...messages.header1} />
      }
      {header === 'dev' &&
        <FormattedMessage {...messages.header2} />
      }
    </div>
  );
}

List.propTypes = {
  header: React.PropTypes.string.isRequired,
};

export default List;
