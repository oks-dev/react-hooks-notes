import React, { useReducer } from 'react'
import axios from 'axios'
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'
import { SHOW_LOADER, ADD_NOTE, SHOW_NOTES } from '../types'

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
    const payload = {
      ...note,
      id: res.data.name
    }
    dispatch({
      type: ADD_NOTE,
      payload
    })
  }

  const showNotes = async () => {
    const res = await axios.get(`${url}/notes.json`)
    const payload = Object.keys(res.data).map(key => {
      return {
        ...res.data[key],
        id: key
      }
    })
    dispatch({
      type: SHOW_NOTES,
      payload
    })
  }

  return (
    <FirebaseContext.Provider value={
      { showLoader, addNote, showNotes, notes: state.notes, loading: state.loading }
    }>
      {children}
    </FirebaseContext.Provider>
  )
}