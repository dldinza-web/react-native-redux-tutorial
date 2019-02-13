import { ADD_FRIEND } from './action.types'

export const addFriend = (friendIndex) => (
  {
    type: ADD_FRIEND,
    payload: friendIndex
  }
)
