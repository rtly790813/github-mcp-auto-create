import React, { useState } from 'react'
import UserForm from './UserForm'

export default function TodoModal({ todo, onClose, onSaveUser }) {
  // Local editable copy of user so user can type and save
  const [user, setUser] = useState(todo.user || { name: '', email: '' })

  const handleSave = () => {
    onSaveUser(user)
    onClose()
  }

  return (
    <div id="todo-modal-root">
      <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: '#fff', padding: 20, borderRadius: 8, width: '90%', maxWidth: 480 }}>
          <button onClick={onClose} style={{ float: 'right', background: 'none', border: 'none', fontSize: 18, cursor: 'pointer' }}>×</button>
          <h3>Todo Details</h3>
          <p><strong>Text:</strong> {todo.text}</p>
          <p><strong>Completed:</strong> {todo.done ? 'Yes' : 'No'}</p>

          <UserForm user={user} onChange={setUser} />

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 12 }}>
            <button onClick={onClose} style={{ padding: '6px 12px', borderRadius: 4 }}>取消</button>
            <button onClick={handleSave} style={{ padding: '6px 12px', borderRadius: 4, background: '#2563eb', color: '#fff', border: 'none' }}>儲存使用者</button>
          </div>
        </div>
      </div>
    </div>
  )
}
