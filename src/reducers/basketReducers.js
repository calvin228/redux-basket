import { ADD_TO_BASKET, REMOVE_FROM_BASKET, CLEAR_BASKET, TOGGLE_BASKET } from "../actions";

const initState = [{ id: 1, name: "Apple", amount: 1 , isDone: true}];
export default function(state = initState, action) {
  switch (action.type) {
    case ADD_TO_BASKET:
      let isExist = false;
      let newState = state.map(s => {
        if (s.id === action.payload.id) {
          isExist = true;
          return { ...s, amount: s.amount + 1 };
        } else {
          return s;
        }
      });
      return isExist === false
        ? [
            ...newState,
            { id: action.payload.id, name: action.payload.name, amount: 1 , isDone: false }
          ]
        : newState;
    case REMOVE_FROM_BASKET:
      newState = state.map(s => {
        if (s.id === action.payload.id && s.amount !== 0) {
          return { ...s, amount: s.amount - 1 };
        } else {
          return s;
        }
      });
      return newState.filter(arr => arr.amount !== 0);
    case CLEAR_BASKET:
      return [];
    case TOGGLE_BASKET:
      newState = state.map(s => {
          console.log(action.payload);
          return s.id === action.payload.id ? {...s, isDone: !s.isDone} : s
      })
      return newState;
    default:
      return state;
  }
}
