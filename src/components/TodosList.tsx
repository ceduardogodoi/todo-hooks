import { TodosCount } from './TodosCount'
import { TodosLeft } from './TodosLeft'

type TodosListProps = {
  todos: string[]
  remove: (index: number) => void
  todosLeft: number
}

// Pegando as props sem desestruturá-las
// também é uma alternativa
export function TodosList(props: TodosListProps) {
  // Função executada ao clicar no botão delete
  function handleDelete(index: number) {
    // Usando props.remove pois não desestruturamos na linha 11
    props.remove(index)
  }

  return (
    <>
      <ul>
        {/* Usando props.todos pois não desestruturamos na linha 11 */}
        {props.todos.map((todo, index) => (
          <li key={index}>
            <span>{todo}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Usa o componente TodosCount */}
      {/* Passamos a prop count para que o componente */}
      {/* TodosCount exiba a quantidade de "todos" */}
      <TodosCount count={props.todos.length} />

      {/* Usa o componente TodosLeft */}
      {/* Passamos a prop todosLeft para que o componente */}
      {/* TodosLeft exiba a quantidade de "todos" restantes na versão "free" */}
      <TodosLeft todosLeft={props.todosLeft} />
    </>
  )
}
