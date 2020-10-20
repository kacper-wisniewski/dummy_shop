export const getOpinionsById = ({ opinions }, id) => {
  return opinions.filter(elem => `${elem.id}` === id)[0].data;
}

const reducerName = 'opinions';
const createActionName = name => `app/${reducerName}/${name}`;

const ADD_OPINION = createActionName('ADD_OPINION');

export const addOpinions = payload => ({payload, type: ADD_OPINION});

export default function reducer(statePart = [], action = {}) {
  switch(action.type) {
    case ADD_OPINION: 
      const productOpinions = statePart.filter(elem => elem.id === action.payload.id)
      productOpinions[0].data.push({
        id: productOpinions[0].data.length + 1,
        user: action.payload.name,
        text: action.payload.comment, 
      });
      return [...statePart.filter(elem => elem.id !== action.payload.id ), productOpinions[0]].sort( (a, b) => a.id > b.id ? 1 : -1);
    default:
      return statePart;
  }
}