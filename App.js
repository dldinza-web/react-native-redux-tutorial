/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import Routes from './app.routing'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Routes/>
    );
  }
}

