import React, { useReducer } from 'react'
import axios from 'axios'
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'
import { SHOW_LOADER } from '../types'

const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false
  }
  const [state, dispatch] = useReducer(firebaseReducer, initialState)

  const showLoader = () => dispatch({ type: SHOW_LOADER })

  const addNote = async title => {
    const note = {
      title,
      date: new Date().toJSON()
    }
    const res = await axios.post(`${url}/notes.json`, note)

    console.log('addNote', res.data)
  }

  return (
    <FirebaseContext.Provider value={
      { showLoader, addNote, notes: state.notes, loading: state.loading }
    }>
      {children}
    </FirebaseContext.Provider>
  )
}