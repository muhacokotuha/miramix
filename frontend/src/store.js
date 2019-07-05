import { createStore } from "redux";

let reducer = (state, action) => {
  switch (action.type) {
    case "AddCategories":
      console.log("add categories");
      return { ...state, categories: action.categories };
    case "AddItems":
      console.log("addItems");
      return { ...state, items: action.items };
    default:
      return state;
  }
};

let store = createStore(
  reducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
