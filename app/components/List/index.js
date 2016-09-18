/**
*
* List
*
*/

import React from 'react';
import cx from 'classnames';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Item from 'components/Item';

import styles from './styles.css';

function List({ category, theme, data }) {
  return (
    <div className={styles.wrapper}>
      <div
        className={cx(styles.header, {
          [styles.headerMorning]: theme.name === 'morning',
          [styles.headerNoon]: theme.name === 'noon',
          [styles.headerNight]: theme.name === 'night',
        })}
      >
        {category === 'design' &&
          <h1 id="design"><FormattedMessage {...messages.header1} /></h1>
        }
        {category === 'dev' &&
          <h1 id="development"><FormattedMessage {...messages.header2} /></h1>
        }
      </div>
      <div>
        {data
          .filter(i => i.category === category)
          .map((item, key) => <Item key={key} theme={theme} {...item} />)
        }
      </div>
    </div>
  );
}

List.propTypes = {
  category: React.PropTypes.string.isRequired,
  theme: React.PropTypes.object.isRequired,
  data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default List;
