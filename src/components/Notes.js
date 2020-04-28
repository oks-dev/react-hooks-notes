import React, { useContext } from 'react'
import { FirebaseContext } from '../context/firebase/firebaseContext'
import { AlertContext } from '../context/alert/alertContext'

export const Notes = ({ notes }) => {
  const firebase = useContext(FirebaseContext)
  const alert = useContext(AlertContext)

  const handleClick = (e) => {
    firebase.removeNote(e)
    alert.show('Note was removed', 'danger')
  }

  return (
    <ul className="list-group">
      {notes.map((note, i) => {
        return (
          <li key={i} className="list-group-item">
            <div>
              <strong>{note.title}</strong>
              <small>{note.date}</small>
            </div>
            <button onClick={e => handleClick(note.id)} type="button" className="btn btn-outline-danger btn-sm">&times;</button>
          </li>
        )
      })}
    </ul>
  )
}