export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export default function reducer(statePart = [], action = {}) {
  switch(action.type) {
    default:
      return statePart;
  }
}