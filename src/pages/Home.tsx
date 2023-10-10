import { TodoAdd } from '../components/TodoAdd';
import { TodosList } from '../components/TodosList';

// Componente que simula a página inicial
// simulando a rota "/"
// Ex.: http://localhost:5173/
// ou http://localhost:5173
export function Home() {
  return (
    <>
      {/* Usa o componente TodoAdd */}
      <TodoAdd />

      {/* Usa o componente TodosList */}
      <TodosList />
    </>
  )
}
