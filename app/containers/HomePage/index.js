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
import Like from 'components/Like';
import LikesList from 'components/LikesList';

import data from './projects.json';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    scroll: window.pageYOffset,
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getTime() {
    const hour = new Date().getHours();
    if (hour > 5 && hour < 12) {
      return 0;
    } else if (hour > 12 && hour < 17) {
      return 1;
    } else if (hour > 17 && hour < 5) {
      return 2;
    }
    return null;
  }

  getTimeTheme() {
    switch (this.getTime()) {
      case 0:
        return {
          name: 'morning',
          compressor: 0.48,
        };
      case 1:
        return {
          name: 'noon',
          compressor: 0.63,
        };
      case 2:
        return {
          name: 'night',
          compressor: 0.61,
        };
      default:
        return {
          name: 'morning',
          compressor: 0.48,
        };
    }
  }

  handleScroll = () => {
    this.setState({
      scroll: window.pageYOffset,
    });
  }

  render() {
    const { scroll } = this.state;
    return (
      <div>
        <Header
          scroll={scroll}
          theme={this.getTimeTheme()}
        />
        <List
          category="design"
          data={data}
          theme={this.getTimeTheme()}
        />
        <List
          category="dev"
          data={data}
          theme={this.getTimeTheme()}
        />
        <Like theme={this.getTimeTheme()} />
        <LikesList theme={this.getTimeTheme()} />
        <Footer theme={this.getTimeTheme()} />
      </div>
    );
  }
}
