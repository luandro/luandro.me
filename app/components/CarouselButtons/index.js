/**
*
* CarouselButtons
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function CarouselButtons() {
  return (
    <div className={styles.carouselButtons}>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default CarouselButtons;
