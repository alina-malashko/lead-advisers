import {
  MODAL_FAILED_IS_CLOSED,
  MODAL_FAILED_IS_OPENED,
  MODAL_SUCCESS_IS_CLOSED,
  MODAL_SUCCESS_IS_OPENED
} from './types';

export function openFailedModal() {
  return {
    type: MODAL_FAILED_IS_OPENED
  };
}

export function openSuccessModal() {
  return {
    type: MODAL_SUCCESS_IS_OPENED
  };
}

export function closeFailedModal() {
  return {
    type: MODAL_FAILED_IS_CLOSED
  };
}

export function closeSuccessModal() {
  return {
    type: MODAL_SUCCESS_IS_CLOSED
  };
}