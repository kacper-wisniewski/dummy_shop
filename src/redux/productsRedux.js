export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getFiltred = ({ products }, filter) => {
  if (filter === 'all') {
    return products;
  } else if (filter === 'new') { 
    return products.filter(elem => elem.isNew);
  } else {
    return products.filter(elem => elem.category === filter);
  }
};
export const getPromo = ({ products }) => {
  return products.filter(elem => elem.isPromo);
};
export const getBestsellers = ({ products }) => {
  return products.filter(elem => elem.isBestseller);
}
export const getNew = ({ products }) => {
  return products.filter(elem => elem.isNew);
}
export const getFiltredCount = ({ products }, filter) => {
  if (filter === 'all') {
    return products.length;
  } else if (filter === 'new') { 
    return products.filter(elem => elem.isNew).length;
  } else {
    return products.filter(elem => elem.category === filter).length;
  }
}
export const getProductById = ( {products }, id) => {
  return products.filter(elem => {
    if (`${elem.id}` === id) return elem;
  })[0];
}

const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

const REMOVE_RATE = createActionName('REMOVE_RATE')
const ADD_RATE = createActionName('ADD_RATE')
export const removeRate = payload => ({payload, type: REMOVE_RATE});
export const addRate = payload => ({payload, type: ADD_RATE});

export default function reducer(statePart = [], action = {}) {
  switch(action.type) {
    case REMOVE_RATE:
      if (action.payload.isRate === 'like') {
        action.payload.likes--;
      } else {
        action.payload.dislikes--;
      }
      action.payload.isRate = false;
      return [ ...statePart.filter(elem => elem.id !== action.payload.id), action.payload].sort((a, b) => a.id > b.id ? 1 : -1);
    case ADD_RATE:
      if (action.payload.isRate === 'like') {
        action.payload.likes++;
      } else {
        action.payload.dislikes++;
      }
      return [ ...statePart.filter(elem => elem.id !== action.payload.id), action.payload].sort((a, b) => a.id > b.id ? 1 : -1);
    default:
      return statePart;
  }
}