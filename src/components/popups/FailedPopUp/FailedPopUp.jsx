import React from 'react';
import { useDispatch } from 'react-redux';
import { closeFailedModal } from '../../../redux/actions';
import styles from '../PopUp.module.scss';

export const FailedPopUp = () => {
  const dispatch = useDispatch();
  const closeModal = (e) => {
    dispatch(closeFailedModal());
  }
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div
          className={styles.modal__close}
          onClick={closeModal}
        >
          <svg
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M13.6711 12.8072L24.0706 2.40765C24.4368 2.04151 24.4368 1.44789 24.0706 1.08179C23.7045 0.715702 23.1109 0.715655 22.7448 1.08179L12.3452 11.4814L1.94568 1.08179C1.57954 0.715655 0.985913 0.715655 0.61982 1.08179C0.253727 1.44794 0.25368 2.04156 0.61982 2.40765L11.0193 12.8072L0.61982 23.2068C0.25368 23.5729 0.25368 24.1665 0.61982 24.5326C0.802866 24.7157 1.04282 24.8072 1.28277 24.8072C1.52272 24.8072 1.76263 24.7157 1.94572 24.5326L12.3452 14.1331L22.7447 24.5326C22.9278 24.7157 23.1677 24.8072 23.4077 24.8072C23.6476 24.8072 23.8875 24.7157 24.0706 24.5326C24.4368 24.1665 24.4368 23.5729 24.0706 23.2068L13.6711 12.8072Z'
              fill='#135978'
              fillOpacity='0.5'
            />
          </svg>
        </div>
        <div className={styles.modal__content}>
          <div className={styles.modal__content__title}>
            OOPS!
          </div>
          <div className={styles.modal__content__subtitle}>
            Something went wrong. Please try again
          </div>
          <button
            className={styles.modal__content__button}
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};