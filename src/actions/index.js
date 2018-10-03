export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
export const CLEAR_BASKET = "CLEAR_BASKET";
export const TOGGLE_BASKET = "TOGGLE_BASKET";

export function addToBasket(grocery) {
  return {
    type: ADD_TO_BASKET,
    payload: grocery
  };
}

export function removeFromBasket(basket) {
  return {
      type: REMOVE_FROM_BASKET,
      payload: basket
  };
}

export function clearBasket(){
    return {
        type: CLEAR_BASKET,
        payload: []
    }
}

export function toggleBasket(basket){
    return {
        type: TOGGLE_BASKET,
        payload: basket
    }
}

