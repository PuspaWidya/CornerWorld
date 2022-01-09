import axios from "axios";
import create from "zustand";

const url = "https://61d3f115b4c10c001712bb4e.mockapi.io/api/user/todo";

const useStoreTodo = create((set) => ({
  todos: [],
  getTodos: async () => {
    const response = await axios.get(url);
    set({ todos: response.data });
  },

  deleteTodos: async (idTodo) => {
    await axios.delete(`${url}/${idTodo}`);
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== idTodo),
    }));
  },

  addTodo: async (form) => {
    const response = await axios.post(url, form);
    set((state) => ({
      todos: [...state.todos, response.data],
    }));
  },

  editTodo: async (data) => {
    const checkStatus = await axios.get(
      `https://61d3f115b4c10c001712bb4e.mockapi.io/api/user/todo/${data}`
    );
    let { finished: editFinished } = checkStatus.data;
    await axios.put(
      `https://61d3f115b4c10c001712bb4e.mockapi.io/api/user/todo/${data}`,
      { finished: !editFinished }
    );

    set((state) => ({
      todos: state.todos.map((item) => {
        if (item.id === data) {
          return {
            ...item,
            finished: !editFinished,
          };
        } else {
          return item;
        }
      }),
    }));
  },
}));

export { useStoreTodo };
