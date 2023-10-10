import { useState } from 'react'

// Tipagem para as props
// que o component TodoAdd
// deve receber
type TodoAddProps = {
  add: (text: string) => void
}

// Desestruturando as props com sua tipagem
export function TodoAdd({ add }: TodoAddProps) {
  const [text, setText] = useState('')

  // Função que é chamada no clique
  // do botão add
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
