import { SHOW_ALERT, HIDE_ALERT } from '../types'

export const alertReducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return true
    case HIDE_ALERT:
      return false
    default:
      return state
  }
}