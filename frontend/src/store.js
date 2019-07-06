import { createStore } from "redux";

let reducer = (state, action) => {
  switch (action.type) {
    case "AddCategories":
      return { ...state, categories: action.categories };
    case "SetCategory":
      return { ...state, currentCategory: action.currentCategory };
    case "AddItems":
      return { ...state, currentItems: action.currentItems };
    default:
      return state;
  }
};

let store = createStore(
  reducer,
  { currentItems: [], categories: [], currentCategory: "" },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
