"use client";

import * as React from "react";

interface TodoItem {
  id: number;
  text: string;
}

export default function TodoListPage() {
  const [list, setList] = React.useState<TodoItem[]>([]);
  const [input, setInput] = React.useState("");

  React.useEffect(() => {
    if(list.length >= 0) {
      document.title = `(${list.length}) Tarefas`;
    }
  },[list]);

  const addItem = () => {
    if (input.trim() === "") return;
    setList([...list, { id: list.length + 1, text: input }]);
    setInput("");
  };

  const deleteItem = (index: number) => {
    const listCopy = [...list];
    listCopy.splice(index, 1); // Remove o item no índice especificado
    setList(listCopy);
  };

  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
        Lista de tarefas
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">
        Exemplo de lista dinâmica combinando{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">useState</code>{" "}
        e{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">useEffect</code>.
      </p>
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addItem()}
          placeholder="Nova tarefa..."
          className="flex-1 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded-lg px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
        />
        <button
          onClick={addItem}
          className="py-2 px-4 text-sm font-medium rounded-lg bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
        >
          Adicionar
        </button>
      </div>
      {list.length === 0 ? (
        <p className="text-zinc-400 dark:text-zinc-600 text-sm text-center py-8">
          Nenhuma tarefa ainda. Adicione uma acima.
        </p>
      ) : (
        <ul className="flex flex-col gap-2">
          {list.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3"
            >
              <span className="text-sm text-zinc-800 dark:text-zinc-100">
                {item.text}
              </span>
              <button
                onClick={() => deleteItem(index)}
                className="text-xs font-medium text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
