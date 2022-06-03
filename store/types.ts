export interface State {
  itemsInCart: {
    [id: string]: {
      count: number;
      price: number;
    };
  };
}

export interface ItemsInCart {
  [id: string]: {
    count: number;
    price: number;
  };
}

export interface Actions {
  addItemInCart(id: string, price: number): void;
  removeItemFromCart(id: string): void;
}

export type Getters = {
  getitemsInCart(state: State): number;
  getCountById(state: State): (id: string) => number;
};
