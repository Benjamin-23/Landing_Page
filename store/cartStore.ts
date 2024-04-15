import { defineStore } from "pinia";
import type { Product } from "~/types/types";

export const useCartStore = defineStore("cart", {
  state: () => ({ cartItems: [] }),
});
