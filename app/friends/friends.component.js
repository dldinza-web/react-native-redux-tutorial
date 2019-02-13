import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addFriend } from '../../redux/friend.actions'

class Friends extends Component {

  onGoHome = () => {
    Actions.Home()
  }

  onAddFriend = (friendIndex) => {
    this.props.addFriend(friendIndex)
  }

  render() {
    return (
      <View>
        <Text>Friends</Text>

        <Button
          title='Home'
          onPress={this.onGoHome}
        />

        <Text>Add Friends</Text>
        {
          this.props.friendReducer.possibleFriends.map((item, index) => (
            <Button
              key={ index }
              title={ `Add friend "${item}"` }
              onPress={() => this.onAddFriend(index)}
            />
          ))
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { friendReducer } = state
  return { friendReducer }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(
    {
      addFriend
    },
    dispatch
  )
)

export default connect(mapStateToProps, mapDispatchToProps)(Friends)
