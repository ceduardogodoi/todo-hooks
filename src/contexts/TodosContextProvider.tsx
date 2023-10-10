import { PropsWithChildren, useEffect, useState } from 'react';
import { TodosContext } from './TodosContext';

// Provider usado para tornar o contexto acessível
// na aplicação
export function TodosContextProvider({ children }: PropsWithChildren) {
  // Estado para armazenar o array de todos
  const [todos, setTodos] = useState<string[]>([])
  const [todosLeft, setTodosLeft] = useState(100)

  // Função para adicionar um novo
  // todo ao array
  function add(text: string) {
    setTodos(prevState => {
      return [...prevState, text]
    })
  }

  // Função para remover o todo
  // do estado do contexto
  function remove(index: number) {
    setTodos(prevState => {
      return prevState.filter((_, i) => i !== index)
    })
  }

  // Função que atualiza a quantidade
  // faltante de "todos" que ainda
  // podem ser registrados
  function updateTodosLeft() {
    setTodosLeft(100 - todos.length)
  }

  // anatomia do useEffect
  // useEffect(callback, [dependências])
  // onde:
  // callback: a função que será disparada
  // [dependencia1, dependencia2...]: array de dependências
  // nota: você pode ter 0 ou mais dependências no array

  // useEffect dispara a função (callback)
  // (1 parâmetro)
  // quando algum item do array
  // de dependências (2do parâmetro) tem seu valor
  // alterado
  useEffect(() => {
    updateTodosLeft()
  }, [todos])

  // objeto do contexto
  const context = {
    todos,
    todosLeft,
    add,
    remove,
  };

  return (
    // Objeto do contexto é passado para o value do Provider
    // se tornando acessível pelo hook useContext ou
    // pelo custom hook useTodos
    <TodosContext.Provider value={context}>
      {children}
    </TodosContext.Provider>
  )
}
