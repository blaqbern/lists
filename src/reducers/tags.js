const initialState = [
  'Target',
  'Home Depot',
  'Costco',
  'Amazon',
  'Grocery Store',
];

const tags = (state = [], action) => {
  switch(action.type) {
    case 'INIT':
      return initialState;

    case 'ADD_TAG':
      return [
        ...state,
        action.text,
      ];

    default:
      return state;
  }
};

export default tags;
