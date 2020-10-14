export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getFiltred = ({ products }, filter) => {
  if (filter === 'all') {
    return products;
  } else {
    return products.filter(elem => elem.category === filter);
  }
}
export const getFiltredCount = ({ products }, filter) => {
  if (filter === 'all') {
    return products.length;
  } else {
    return products.filter(elem => elem.category === filter).length;
  }
}

export default function reducer(statePart = [], action = {}) {
  switch(action.type) {
    default:
      return statePart;
  }
}