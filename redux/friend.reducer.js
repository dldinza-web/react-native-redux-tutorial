import { combineReducers } from 'redux'
import { ADD_FRIEND } from './action.types'

const INITIAL_STATE = {
  currentFriends: [],
  possibleFriends: [
    'Allie',
    'Gator',
    'Lizzie',
    'Reptar',
  ]
}

const friendReducer = ( state = INITIAL_STATE, action ) => {
  switch( action.type ) {
    case ADD_FRIEND:
      const {
        currentFriends,
        possibleFriends
      } = state

      const newFriend = possibleFriends.splice(action.payload, 1)

      currentFriends.push(newFriend)

      const newState = { currentFriends, possibleFriends }

      return newState
    break
    default:
      return state
  }
}

export default combineReducers({
  friendReducer: friendReducer
})
