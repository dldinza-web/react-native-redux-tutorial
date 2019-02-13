import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { connect } from 'react-redux'

class Home extends Component {

  onGoFrends = () => {
    Actions.Friends()
  }

  render() {
    return (
      <View>
        <Text>Home</Text>

        <Text>Number of Friends in my Social Network: { this.props.friendReducer.currentFriends.length }</Text>

        <Button
          title='Friends'
          onPress={this.onGoFrends}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { friendReducer } = state
  return { friendReducer }
}

export default connect(mapStateToProps)(Home)
