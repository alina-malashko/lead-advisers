import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-scroll';
import { startTitleAnimation } from '../../redux/actions';
import EmailForm from '../EmailForm/EmailForm';
import Timer from '../Timer/Timer';
import { SuccessPopUp } from '../popups/SuccessPopUp/SuccessPopUp';
import { FailedPopUp } from '../popups/FailedPopUp/FailedPopUp';

import logo from '../../static/images/logo.png';
import styles from './MainPage.module.scss';

const MainPage = () => {
  const dispatch = useDispatch();
  const sentSuccessfully = useSelector((state) => state.popUpReducer.success);
  const failedToSend = useSelector((state) => state.popUpReducer.failed);
  return (
    <div className={styles.page}>
      <div className={styles.page__leftAngle} />
      <div className={styles.page__rightAngle} />
      <main className={styles.page__content}>
        <div className={styles.page__content__logo}>
          <a href='/' title='main'>
            <img src={logo} alt='lead advisors' />
          </a>
        </div>
        <div className={styles.page__content__titles}>
          <h1 className={styles.page__content__titles__title}>
            Under Construction
          </h1>
          <div className={styles.page__content__titles__subtitle}>
            We're making lots of improvements and will be back soon
          </div>
        </div>
        <div className={styles.page__content__counter}>
          <Timer />
        </div>
        <div className={styles.page__content__links}>
          <div className={styles.page__content__links__label}>
            Check our event page when you wait:
          </div>
          <a
            className={styles.page__content__links__link}
            href='https://leadadvisors.org'
            title='lead advisors'
            target='_blank'
            rel='noreferrer'
          >
            Go to the event
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4.16675 10H15.8334'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M10 4.16666L15.8333 9.99999L10 15.8333'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </a>
        </div>
      </main>
      <footer className={styles.page__footer}>
        <div className={styles.page__footer__form}>
          <EmailForm />
        </div>
        <Link
          to='events'
          smooth={true}
          duration={500}
          className={styles.page__footer__link}
          onClick={() => dispatch(startTitleAnimation())}
        >
          <span>
            Other Events
          </span>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12 5V19'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M19 12L12 19L5 12'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Link>
      </footer>
      {sentSuccessfully && <SuccessPopUp />}
      {failedToSend && <FailedPopUp />}
    </div>
  );
};

export default MainPage;