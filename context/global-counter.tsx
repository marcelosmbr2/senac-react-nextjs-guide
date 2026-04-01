"use client";

import { createContext, useContext, useState } from "react";

type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const CounterContext = createContext<CounterContextType | null>(null);

export function CounterProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const context = useContext(CounterContext);
  if (!context) throw new Error("useCounter deve ser usado dentro de CounterProvider");
  return context;
}
