import React, { useState, useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'

export const Form = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)

  const handleSubmit = e => {
    e.preventDefault()
    if (value.trim()) {
      alert.show('Note was create', 'success')
      setValue('')
    } else {
      alert.show('Add your note')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          placeholder='Add note...'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  )
}