/**
*
* Header
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import FitText from 'react-fittext';
import cx from 'classnames';

import Anime from 'react-anime';
import Navbar from 'components/Navbar';

import styles from './styles.css';

function Header({ theme, scroll }) {
  return (
    <div
      className={cx(styles.wrapper, {
        [styles.wrapperMorning]: theme.name === 'morning',
        [styles.wrapperNoon]: theme.name === 'noon',
        [styles.wrapperNight]: theme.name === 'night',
      })}
    >
      <div className={styles.container}>
        <div className={styles.greeting}>
          <FitText compressor={theme.compressor}>
            <h1><FormattedMessage {...messages[theme.name]} /></h1>
          </FitText>
          <FitText compressor={1.2}>
            <h2>
              <span><FormattedMessage {...messages.iam1} /></span>
              <span><FormattedMessage {...messages.iam2} /></span>
              <span><FormattedMessage {...messages.iam3} /></span>
            </h2>
          </FitText>
        </div>
      </div>
      <div
        className={cx(styles.work, {
          [styles.workMorning]: theme.name === 'morning',
          [styles.workNoon]: theme.name === 'noon',
          [styles.workNight]: theme.name === 'night',
        })}
      >
        <div className={styles.container}>
          <FitText compressor={1.5}>
            <h4><FormattedMessage {...messages.work1} /></h4>
          </FitText>
          <FitText compressor={0.9}>
            <h3><FormattedMessage {...messages.work2} /></h3>
          </FitText>
        </div>
      </div>
      {/*<Anime
        easing="easeOutElastic"
        duration={1000}
        direction="alternate"
        loop
        delay={(el, index) => index * 240}
        translateX="13rem"
        scale={[0.75, 0.9]}
      >
        <div style={{ width: 40, height: 40, background: 'blue' }} />
      </Anime>*/}
      <Navbar sticky={scroll > 770} theme={theme} />
    </div>
  );
}

Header.propTypes = {
  theme: React.PropTypes.object.isRequired,
  scroll: React.PropTypes.number.isRequired,
};

export default Header;
