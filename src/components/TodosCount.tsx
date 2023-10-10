import { useTodos } from '../hooks/useTodos'

export function TodosCount() {
  // Consome o custom hook
  // pegando as propriedades com seus valores
  const { todos } = useTodos()

  return (
    <>
      {/* Quantidade de todos através
      do tamanho do array */}
      <p>Todos count: {todos.length}</p>

      {/* Quantidade de todos restante
      para usuário não premium */}
      {/* <p>Todos left: {todosLeft}</p> */}
    </>
  )
}
