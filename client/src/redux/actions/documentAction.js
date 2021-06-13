import ACTIONS from './types';
import axios from 'axios';

export const fetchAllDocuments = (token) => async (dispatch) => {
  try {
    const res = await axios.get('/api/get_all_document', {
      headers: { Authorization: token },
    });

    dispatch({
      type: ACTIONS.GET_ALL_DOCUMENTS,
      payload: [...res.data.allDocuments],
    });
  } catch (error) {
    console.log(error);
  }
};
