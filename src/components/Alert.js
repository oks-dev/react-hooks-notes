import React, { useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext)

  if (!alert.visible) {
    return null
  }
  return (
    <div className={`alert alert-${alert.payload.type || 'warning'} alert-dismissible`}>
      {alert.payload.text}
      <button onClick={hide} type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}