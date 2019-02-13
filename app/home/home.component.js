import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Home extends Component {

  onGoFrends = () => {
    Actions.Friends()
  }

  render() {
    return (
      <View>
        <Text>Home</Text>

        <Button
          title='Friends'
          onPress={this.onGoFrends}
        />
      </View>
    )
  }
}

export default Home
