import React, { useReducer } from 'react'
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'
import { SHOW_LOADER } from '../types'

export const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false
  }
  const [state, dispatch] = useReducer(firebaseReducer, initialState)

  const showLoader = () => dispatch({ type: SHOW_LOADER })

  return (
    <FirebaseContext.Provider value={{ showLoader, loading: state.loading }}>
      {children}
    </FirebaseContext.Provider>
  )
}