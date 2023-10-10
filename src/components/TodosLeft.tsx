type TodosLeftProps = {
  todosLeft: number
}

export function TodosLeft({ todosLeft }: TodosLeftProps) {
  return (
    <p>Free version - Todos left: {todosLeft}</p>
  )
}
