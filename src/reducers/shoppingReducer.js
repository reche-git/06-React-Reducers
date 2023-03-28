import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "Angular", price: 100, image: "angular" },
    { id: 2, name: "Ember", price: 200, image: "ember" },
    { id: 3, name: "Node", price: 300, image: "node" },
    { id: 4, name: "React", price: 400, image: "react" },
    { id: 5, name: "Ruby", price: 500, image: "ruby" },
    { id: 6, name: "Vue", price: 600, image: "vue" },
  ],
  cart: [],
  total: 0,
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      // console.log(newItem.price);

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            total: state.total + newItem.price,
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
            total: state.total + newItem.price,
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      // console.log(itemToDelete);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
            total: state.total - itemToDelete.price,
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
            total: state.total - itemToDelete.price,
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      // console.log(itemToDelete);

      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
        total: state.total - itemToDelete.quantity * itemToDelete.price,
      };
    }
    case TYPES.CLEAR_CART: {
      return shoppingInitialState;
    }

    default:
      return state;
  }
}
