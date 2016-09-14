/**
*
* Header
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import FitText from 'react-fittext';
import Anime from 'react-anime';
import Navbar from 'components/Navbar';

import styles from './styles.css';

function Header({ time, scroll }) {
  const greetingMessage = () => {
    switch (time) {
      case 0:
        return <FormattedMessage {...messages.day} />;
      case 1:
        return <FormattedMessage {...messages.noon} />;
      case 2:
        return <FormattedMessage {...messages.night} />;
      default:
        return <FormattedMessage {...messages.day} />;
    }
  };
  const backgroundImage = () => {
    switch (time) {
      case 0:
        return { backgroundImage: "url('./morning.png')" };
      case 1:
        return { backgroundImage: "url('./morning.png')" };
      case 2:
        return { backgroundImage: "url('./morning.png')" };
      default:
        return { backgroundImage: "url('./morning.png')" };
    }
  };
  return (
    <div className={styles.wrapper} style={backgroundImage()}>
      <div className={styles.container}>
        <div className={styles.greeting}>
          <FitText compressor={0.63}>
            <h1>{greetingMessage()}</h1>
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
      <div className={styles.work}>
        <div className={styles.container}>
          <FitText compressor={1.5}>
            <h4><FormattedMessage {...messages.work1} /></h4>
          </FitText>
          <FitText compressor={0.9}>
            <h3><FormattedMessage {...messages.work2} /></h3>
          </FitText>
        </div>
      </div>
      <Anime
        easing="easeOutElastic"
        duration={1000}
        direction="alternate"
        loop
        delay={(el, index) => index * 240}
        translateX="13rem"
        scale={[0.75, 0.9]}
      >
        <div style={{ width: 40, height: 40, background: 'blue' }} />
      </Anime>
      <Navbar sticky={scroll > 1024} />
    </div>
  );
}

Header.propTypes = {
  time: React.PropTypes.number.isRequired,
  scroll: React.PropTypes.number.isRequired,
};

export default Header;
