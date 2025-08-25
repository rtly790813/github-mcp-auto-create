
import React, { useState, useEffect } from 'react'


function App() {
  const STORAGE_KEY = 'todos_v1'

  const [todos, setTodos] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch (e) {
      console.warn('failed to parse todos from localStorage', e)
      return []
    }
  })

  const [input, setInput] = useState('')

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    } catch (e) {
      console.warn('failed to save todos to localStorage', e)
    }
  }, [todos])

  const addTodo = (e) => {
    if (e && e.preventDefault) e.preventDefault()
    if (input.trim() === '') return
    setTodos([...todos, { text: input.trim(), done: false }])
    setInput('')
  }

  const toggleTodo = (idx) => {
    setTodos(
      todos.map((todo, i) =>
        i === idx ? { ...todo, done: !todo.done } : todo
      )
    )
  }

  const deleteTodo = (idx) => {
    setTodos(todos.filter((_, i) => i !== idx))
  }

  return (
    <div style={{ maxWidth: 560, margin: '40px auto', padding: 20 }}>
      <h2 style={{ textAlign: 'center' }}>Todo List</h2>

      <form onSubmit={addTodo} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="輸入待辦事項"
          style={{ flex: 1, padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '8px 12px', borderRadius: 4, border: 'none', background: '#2563eb', color: '#fff' }}>
          新增
        </button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.length === 0 && <li style={{ textAlign: 'center', color: '#666' }}>目前沒有待辦事項</li>}
        {todos.map((todo, idx) => (
          <li key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #eee' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(idx)} />
              <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
            </label>
            <button onClick={() => deleteTodo(idx)} style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer' }}>
              刪除
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
