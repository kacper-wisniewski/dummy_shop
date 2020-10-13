export const getCart = ({ cart }) => cart;

const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');

export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const removeProduct = payload => ({payload, type: REMOVE_PRODUCT});

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return [...statePart, action.payload];
    }
    case REMOVE_PRODUCT: {
      return statePart.filter(elem => elem !== action.payload)
    }
    default:
      return statePart;
  }
}