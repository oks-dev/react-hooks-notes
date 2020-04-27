import { SHOW_LOADER, ADD_NOTE } from '../types'

export const firebaseReducer = (state, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true }
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, { payload: action.payload }]
      }
    default:
      return state
  }
}