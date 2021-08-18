import { ActionType } from "../constants/action-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "Product 1",
      category: "category 1",
    },
  ],
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECTED_PRODUCT:
      break;

    default:
      return state;
  }
};
