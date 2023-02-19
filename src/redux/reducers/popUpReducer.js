import { 
  MODAL_FAILED_IS_CLOSED,
  MODAL_FAILED_IS_OPENED,
  MODAL_SUCCESS_IS_CLOSED,
  MODAL_SUCCESS_IS_OPENED
} from '../types';

const initialState = {
  failed: false,
  success: false
};

export const popUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_FAILED_IS_CLOSED:
      return {
        ...state,
        failed: false
      };
    case MODAL_FAILED_IS_OPENED:
      return {
        ...state,
        failed: true
      };
    case MODAL_SUCCESS_IS_CLOSED:
      return {
        ...state,
        success: false
      };
    case MODAL_SUCCESS_IS_OPENED:
      return {
        ...state,
        success: true
      };
    default:
      return state;
  }
};