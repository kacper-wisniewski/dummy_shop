export const getOpinionsById = ({ opinions }, id) => {
  return opinions.filter(elem => {
    if (`${elem.id}` === id) return elem;
  })[0].data;
}

export default function reducer(statePart = [], action = {}) {
  switch(action.type) {
    default:
      return statePart;
  }
}