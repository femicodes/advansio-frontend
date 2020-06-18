import axios from 'axios';
import { commentConstants } from '../constants';

axios.defaults.baseURL = 'https://commenter-api.herokuapp.com/v1';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const fetchCommentsSuccess = comments => ({
  type: commentConstants.FETCH_COMMENTS,
  payload: comments
});

export const fetchComments = () => dispatch => {
  axios
    .get('/comments')
    .then(response => {
      const { data: { status, comments } } = response
      if (status) {
        dispatch(fetchCommentsSuccess(comments));
      }
    })
    .catch(error => {
      throw new Error(error);
    })
}



/* export const getBanks = (token) => dispatch => {
  dispatch(beginApiCall());
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  axios
    .get('/bank', config)
    .then(response => {
      if (response.data.status) {
        dispatch(endApiCall());
        dispatch(getBanksSuccess(response.data.banks));
      }
    })
    .catch(() => {
      dispatch(getBanksFailure());
      dispatch(endApiCall());
    });
};
 */