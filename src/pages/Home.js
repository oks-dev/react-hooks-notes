import React, { useContext } from 'react'
import { Form } from '../components/Form'
import { Notes } from '../components/Notes'
import { Loader } from '../components/Loader'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Home = () => {
  const { loading, notes } = useContext(FirebaseContext)

  console.log(loading)
  console.log(notes)

  // const notes = [
  //   { id: 1, title: 'Note 1' },
  //   { id: 2, title: 'Note 2' },
  //   { id: 3, title: 'Note 3' },
  // ]

  return (
    <>
      <Form />
      {!loading ? <Loader /> : <Notes notes={notes} />}
    </>
  )
}