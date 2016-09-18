/**
*
* Item
*
*/

import React from 'react';
import { Link } from 'react-router';
import cx from 'classnames';
import Eye from './eye.png';

import styles from './styles.css';

function Item({ theme, title, category, type, client, place, state, slug, link, image }) {
  const Image = require(`containers/HomePage/images/${image}.jpg`); // eslint-disable-line global-require
  return (
    <article className={styles.wrapper}>
      <div
        className={cx(styles.container, {
          [styles.containerMorning]: theme.name === 'morning',
          [styles.containerNoon]: theme.name === 'noon',
          [styles.containerNight]: theme.name === 'night',
        })}
      >
        <img src={Image} alt={title} />
        <div
          className={cx(styles.info, {
            [styles.infoMorning]: theme.name === 'morning',
            [styles.infoNoon]: theme.name === 'noon',
            [styles.infoNight]: theme.name === 'night',
          })}
        >
          <h2>{type}</h2>
          <h3>{client}</h3>
          <h4>{place}, {state}</h4>
        </div>
      </div>
      <div
        className={cx(styles.button, {
          [styles.buttonMorning]: theme.name === 'morning',
          [styles.buttonNoon]: theme.name === 'noon',
          [styles.buttonNight]: theme.name === 'night',
        })}
      >
        <Link to="/"><img src={Eye} alt="veja" /></Link>
        <span>ver</span>
      </div>
    </article>
  );
}

Item.propTypes = {
  theme: React.PropTypes.object.isRequired,
  title: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  link: React.PropTypes.string,
  category: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  client: React.PropTypes.string.isRequired,
  place: React.PropTypes.string.isRequired,
  state: React.PropTypes.string.isRequired,
  slug: React.PropTypes.string.isRequired,
};

export default Item;
