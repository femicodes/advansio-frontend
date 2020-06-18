import { commentConstants } from '../constants';
import initialState from './initialState';

const commentReducer = (state = initialState.comments, action) => {
  switch (action.type) {
    case commentConstants.FETCH_COMMENTS:
      return { ...state, comments: action.payload }

    default:
      return state;
  }
};

export default commentReducer;
