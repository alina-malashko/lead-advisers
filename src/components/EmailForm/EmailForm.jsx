import React from 'react';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { openSuccessModal, openFailedModal } from '../../redux/actions';
import classNames from 'classnames/bind';
import { emailValidator } from '../../utils/validators/emailValidator';
import styles from './EmailForm.module.scss';

const EmailForm = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          email: ''
        }}
        onSubmit={ async (values, { setFieldError }) => {
          try {
            const ajaxHandlerScript='https://fe.it-academy.by/AjaxStringStorage2.php';
            let user = values.email.split('@')[0] + Math.floor(Math.random() * 1000);
            let sp = new URLSearchParams();
            sp.append('f', 'INSERT');
            sp.append('n', user);
            sp.append('v', JSON.stringify(values.email.trim()));
            let response = await fetch(ajaxHandlerScript,{ method: 'post', body: sp });
            console.log(response);
            dispatch(openSuccessModal());
          } catch (e) {
            console.error(e);
            dispatch(openFailedModal());
          }
        }}

        validate={emailValidator}
      >
        {(formik) => {
          const { isSubmitting, errors } = formik;
          return (
            <Form className={styles.form}>
              <input
                name='email'
                placeholder='Enter your Email and get notified'
                className={classNames(styles.form__input, errors.email && styles.form__input__error)}
                onChange={formik.handleChange}
              />
              {errors.email &&
                <div className={styles.form__error}>
                  <svg
                    width='30'
                    height='30'
                    viewBox='0 0 30 30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M15 9.9165C15.4142 9.9165 15.75 10.2523 15.75 10.6665V16.0832C15.75 16.4974 15.4142 16.8332 15 16.8332C14.5858 16.8332 14.25 16.4974 14.25 16.0832V10.6665C14.25 10.2523 14.5858 9.9165 15 9.9165Z'
                      fill='#DF2224'
                    />
                    <path
                      d='M14.9941 18.3335C14.4419 18.3335 13.9941 18.7812 13.9941 19.3335C13.9941 19.8858 14.4419 20.3335 14.9941 20.3335H15.0039C15.5562 20.3335 16.0039 19.8858 16.0039 19.3335C16.0039 18.7812 15.5562 18.3335 15.0039 18.3335H14.9941Z'
                      fill='#DF2224'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M3.41699 14.9998C3.41699 8.62729 8.62778 3.4165 15.0003 3.4165C21.3729 3.4165 26.5837 8.62729 26.5837 14.9998C26.5837 21.3724 21.3729 26.5832 15.0003 26.5832C8.62778 26.5832 3.41699 21.3724 3.41699 14.9998ZM15.0003 4.9165C9.45621 4.9165 4.91699 9.45572 4.91699 14.9998C4.91699 20.544 9.45621 25.0832 15.0003 25.0832C20.5444 25.0832 25.0837 20.544 25.0837 14.9998C25.0837 9.45572 20.5444 4.9165 15.0003 4.9165Z'
                      fill='#DF2224'
                    />
                  </svg>
                  {errors.email}
                </div>}
              <button
                type='submit'
                className={styles.form__button}
              >
                {isSubmitting &&
                  <span className={styles.loader}></span>
                }
                {!isSubmitting &&
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M4.1665 10H15.8332'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M10 4.16666L15.8333 10L10 15.8333'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                }
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default EmailForm;