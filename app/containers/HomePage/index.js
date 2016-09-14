/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Header from 'components/Header';
import List from 'components/List';
import Footer from 'components/Footer';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  getTime() {
    const hour = new Date().getHours();
    if (hour > 5 && hour < 13) {
      return 0;
    } else if (hour > 13 && hour < 18) {
      return 1;
    } else if (hour > 18 && hour < 5) {
      return 2;
    }
    return null;
  }
  render() {
    const time = this.getTime();
    return (
      <div>
        <Header time={time} />
        <List />
        <Footer />
      </div>
    );
  }
}
