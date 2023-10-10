import { useState } from 'react'
import { useTodos } from '../hooks/useTodos';

export function TodoAdd() {
  const [text, setText] = useState('')
  const { add } = useTodos()

  function handleAdd() {
    if (text.trim().length > 0) {
      add(text)
      setText('')
    }
  }

  return (
    <>
      <h1>Add Todo</h1>

      <input
        type="text"
        placeholder="Add your new task"
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>
    </>
  );
}
