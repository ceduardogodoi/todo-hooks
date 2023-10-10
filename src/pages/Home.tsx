import { useEffect, useState } from 'react';
import { TodoAdd } from '../components/TodoAdd';
import { TodosList } from '../components/TodosList';

// Componente que simula a página inicial
// simulando a rota "/"
// Ex.: http://localhost:5173/
// ou http://localhost:5173
export function Home() {
  // Passando o objeto de componente pai para filho
  // o famoso prop-drilling
  // note que nessa branch o
  // componente Home
  // que é o mais alto na hierarquia
  // funciona como um contexto
  const [todos, setTodos] = useState<string[]>([])
  const [todosLeft, setTodosLeft] = useState(100)

  // Todas os valores e funções para manipular
  // o estado "todos" devem ser criados
  // no componente mais alto na árvore
  // de componentes, para que
  // possamos passar os valores as funções
  // para componentes filhos via prop
  // o famoso prop-drilling

  // Função add que será passada via prop
  // para o component TodoAdd
  // para que ele possa chamar essa função
  // e manipular o estado "todos"
  function add(text: string) {
    setTodos(prevState => [...prevState, text])
  }

  // Função remove que será passada via prop
  // para o component TodoList
  // para que ele possa chamar essa função
  // e manipular o estado "todos"
  function remove(index: number) {
    return setTodos(prevState => prevState.filter((_, i) => i !== index))
  }

  // Função que atualiza
  // a quantidade de todos
  // que se pode ser registrada
  // na versão "free"
  function updateTodosLeft() {
    setTodosLeft(100 - todos.length)
  }

  // callback do useEffect será chamado
  // a cada vez que a dependência "todos"
  // for alterada
  useEffect(() => {
    updateTodosLeft()
  }, [todos])

  return (
    <>
      {/* Usa o componente TodoAdd */}
      {/* passando a função add como prop */}
      <TodoAdd add={add} />

      {/* Usa o componente TodosList */}
      {/* passando as props: lista de "todos", função remove */}
      {/* e todosLeft com a contagem de todos restantes no "free" */}
      {/* note que o componente TodosList não teria o porquê saber essa informação (todosLeft) */}
      {/* pois ele não exibe a contagem de todos restante */}
      {/* mas o componente que exibe é um filho (children) de TodosList */}
      <TodosList todos={todos} remove={remove} todosLeft={todosLeft} />
    </>
  )
}
