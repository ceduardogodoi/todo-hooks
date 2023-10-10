import { useContext } from 'react'

import { TodosContext } from '../contexts/TodosContext'

export function useTodos() {
  // retorna o retorno do chamado
  // do useContext usando o contexto de todos
  return useContext(TodosContext)

  // o mesmo abaixo funciona também:
  // const todosContext = useContext(TodosContext)
  // return todosContext
}
