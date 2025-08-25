import React from 'react'

export default function TodoItem({ todo, idx, onToggle, onDelete, onShow }) {
  return (
    <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #eee' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <input type="checkbox" checked={todo.done} onChange={onToggle} />
        <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
      </label>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <button onClick={onShow} style={{ padding: '4px 8px', borderRadius: 4, border: '1px solid #ccc', background: '#fff', cursor: 'pointer' }}>
          Show
        </button>
        <button onClick={onDelete} style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer' }}>
          刪除
        </button>
      </div>
    </li>
  )
}
