import { useTodos } from '../hooks/useTodos'
import { TodosCount } from './TodosCount'
import { TodosLeft } from './TodosLeft'

export function TodosList() {
  // Desestrutura a propriedade todos
  // e função remove do contexto
  // através do custom hook useTodos
  const { todos, remove } = useTodos()

  // Função callback executada ao clicar
  // no botão Delete
  function handleDelete(index: number) {
    // função desestruturada
    // do contexto
    remove(index)
  }

  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span>{todo}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Usa o componente TodosCount */}
      <TodosCount />

      {/* Usa o componente TodosLeft */}
      <TodosLeft />
    </>
  )
}
