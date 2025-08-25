import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, onToggle, onDelete, onShow }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.length === 0 && <li style={{ textAlign: 'center', color: '#666' }}>目前沒有待辦事項</li>}
      {todos.map((todo, idx) => (
        <TodoItem
          key={idx}
          idx={idx}
          todo={todo}
          onToggle={() => onToggle(idx)}
          onDelete={() => onDelete(idx)}
          onShow={() => onShow(idx)}
        />
      ))}
    </ul>
  )
}
