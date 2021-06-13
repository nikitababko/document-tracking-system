import ACTIONS from '../actions/types';

const documents = [];

const documentsReducer = (state = documents, action) => {
  switch (action.type) {
    case ACTIONS.GET_ALL_DOCUMENTS:
      return action.payload;
    default:
      return state;
  }
};

export default documentsReducer;
