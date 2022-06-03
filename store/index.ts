import { defineStore, acceptHMRUpdate } from 'pinia';
import { State, Getters, Actions } from './types';

export const useCartStore = defineStore<'cart', State, Getters, Actions>(
  'cart',
  {
    state: () => {
      return {
        itemsInCart: {},
      };
    },
    actions: {
      addItemInCart(id: string, price: number) {
        if (id in this.itemsInCart) {
          this.itemsInCart[id].count++;
        } else {
          this.itemsInCart[id] = { price, count: 1 };
        }
      },
      removeItemFromCart(id: string) {
        if (id in this.itemsInCart) {
          this.itemsInCart[id].count--;
          if (this.itemsInCart[id].count === 0) {
            delete this.itemsInCart[id];
          }
        }
      },
    },
    getters: {
      getitemsInCart: (state) => {
        const cartVals = Object.values(state.itemsInCart);
        return cartVals.reduce((acc, cur) => {
          return acc + cur.count * cur.price;
        }, 0);
      },
      getCountById: (state) => (id: string) => {
        if (id in state.itemsInCart) {
          return state.itemsInCart[id].count;
        }
        return 0;
      },
    },
  },
);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
