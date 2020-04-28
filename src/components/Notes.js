import React from 'react'

export const Notes = ({ notes, onRemove }) => {
  return (
    <ul className="list-group">
      {notes.map((note, i) => {
        return (
          <li key={i} className="list-group-item">
            <div>
              <strong>{note.title}</strong>
              <small>{note.date}</small>
            </div>
            <button onClick={() => onRemove(note.id)} type="button" className="btn btn-outline-danger btn-sm">&times;</button>
          </li>
        )
      })}
    </ul>
  )
}