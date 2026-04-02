"use client";

/*
O arquivo `error.tsx` é um componente de erro personalizado para a aplicação Next.js. 
Ele é usado para exibir mensagens de erro de forma amigável para o usuário. 
O componente recebe um objeto de erro como prop e exibe a mensagem de erro contida nesse objeto.
*/

export default function Error({ error } : { error: Error }) {
  return <p>Erro: {error.message}</p>;
}
