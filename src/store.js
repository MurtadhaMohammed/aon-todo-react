import { create } from "zustand";

export const useStore = create((set) => ({
  todos: [{ id: 1, todo: "First Task" }],
  setTodos: (todos) => set({ todos }),
}));
