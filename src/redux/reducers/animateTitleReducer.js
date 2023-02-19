import { 
  START_TITLE_ANIMATION,
} from '../types';

const initialState = {
  animate: false
};

export const animateTitleReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TITLE_ANIMATION:
      return {
        ...state,
        animate: true
      };
    default:
      return state;
  }
};