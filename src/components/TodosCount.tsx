// Tipagem para o componente TodosCount
type TodosCount = {
  count: number
}

export function TodosCount(props: TodosCount) {
  // Outra alternativa para desestruturar as props;
  // podemos desestrutura-la em outra linha
  const { count } = props;

  return (
    <>
      {/* Quantidade de todos que pegamos via props */}
      <p>Todos count: {count}</p>
    </>
  )
}
