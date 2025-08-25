import React from 'react'

export default function UserForm({ user, onChange }) {
  return (
    <div style={{ marginTop: 8, paddingTop: 8, borderTop: '1px solid #eee' }}>
      <h4>使用者資訊</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <input
          value={user.name}
          onChange={(e) => onChange({ ...user, name: e.target.value })}
          placeholder="使用者名稱"
          style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        />
        <input
          value={user.email}
          onChange={(e) => onChange({ ...user, email: e.target.value })}
          placeholder="電子郵件"
          style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        />
      </div>
    </div>
  )
}
