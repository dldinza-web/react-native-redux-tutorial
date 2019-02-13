import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './app/home/home.component'
import Friends from './app/friends/friends.component'

const Routes = () => (
  <Router>
    <Scene key='root'>
      <Scene key="Home" component = { Home } title="Home" initial={true}/>
      <Scene key="Friends" component = { Friends } title="Friends"/>
    </Scene>
  </Router>
)

export default Routes
