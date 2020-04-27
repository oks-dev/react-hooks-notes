import React from 'react'

export const Notes = ({ notes }) => {
  return (
    <ul className="list-group">
      {notes.map(note => {
        return (
          <li key={note.id} className="list-group-item">{note.title}</li>
        )
      })}
    </ul>
  )
}