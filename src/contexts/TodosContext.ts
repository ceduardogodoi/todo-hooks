// Tipagem para

import { createContext } from "react"

// o objeto do contexto
type TodosContextType = {
  todos: string[]
  todosLeft: number
  add: (text: string) => void
  remove: (index: number) => void
}

// Cria o contexto de "todos"
// e exporta-o
// lembrando que ele pode ter
// propriedades com valores e funções
export const TodosContext = createContext<TodosContextType>({} as TodosContextType)
