import { useTodos } from '../hooks/useTodos'

export function TodosLeft() {
  const { todosLeft } = useTodos()

  return (
    <p>Free version - Todos left: {todosLeft}</p>
  )
}
