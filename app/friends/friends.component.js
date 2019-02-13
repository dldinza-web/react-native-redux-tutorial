import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Friends extends Component {

  onGoHome = () => {
    Actions.Home()
  }

  render() {
    return (
      <View>
        <Text>Friends</Text>

        <Button
          title='Home'
          onPress={this.onGoHome}
        />
      </View>
    )
  }
}

export default Friends
