import React, { useContext, useEffect } from 'react'
import { Form } from '../components/Form'
import { Notes } from '../components/Notes'
import { Loader } from '../components/Loader'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Home = () => {
  const { loading, notes, showNotes, removeNote } = useContext(FirebaseContext)

  useEffect(() => {
    showNotes()
  })

  return (
    <>
      <Form />
      {loading ? <Loader /> : <Notes notes={notes} onRemove={removeNote} />}
    </>
  )
}