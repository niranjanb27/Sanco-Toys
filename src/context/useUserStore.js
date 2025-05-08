import { create } from "zustand";

export const useUserStore = create((set) => ({
  cart: [],
  userData: null,
  setCart: (cart) => set({ cart }),
  setUserData: (data) => set({ userData: data }),
}));
