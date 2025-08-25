
import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import TodoModal from './components/TodoModal'

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
    setTodos([...todos, { text: input.trim(), done: false, user: null }])
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

  // Modal state for showing todo details and editing user details
  const [modalOpen, setModalOpen] = useState(false)
  const [currentTodoIndex, setCurrentTodoIndex] = useState(null)

  const openModal = (idx) => {
    setCurrentTodoIndex(idx)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setCurrentTodoIndex(null)
  }

  const saveUserForTodo = (idx, user) => {
    setTodos(todos.map((t, i) => (i === idx ? { ...t, user } : t)))
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

      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} onShow={openModal} />

      {modalOpen && currentTodoIndex !== null && (
        <TodoModal
          todo={todos[currentTodoIndex]}
          onClose={closeModal}
          onSaveUser={(user) => saveUserForTodo(currentTodoIndex, user)}
        />
      )}
    </div>
  )
}

export default App
