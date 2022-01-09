import axios from "axios";
import create from "zustand";

const url = "https://61d3f115b4c10c001712bb4e.mockapi.io/api/user/user";

const useStoreUser = create((set) => ({
  users: [],
  getUser: async () => {
    const response = await axios.get(url);
    set({ users: response.data });
  },

  addUser: async (form) => {
    const response = await axios.post(url, form);
    set((state) => ({
      users: [...state.users, response.data],
    }));
  },
}));

export { useStoreUser };
