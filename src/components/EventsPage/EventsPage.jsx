import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './EventsPage.module.scss';

const EventsPage = () => {
  const [active, setActive] = useState('01');
  const animate = useSelector((state) => state.animateTitleReducer.animate);
  const openItem = (e) => {
    if (active === e.currentTarget.id) return;
    setActive(e.currentTarget.id);
  }
  const events = [
    {
      id: '01',
      title: 'Hawaiian party',
      date: '13.02.2023'
    },
    {
      id: '02',
      title: 'Мafia party',
      date: '13.03.2023'
    },
    {
      id: '03',
      title: 'Party',
      date: '13.04.2023'
    },
    {
      id: '04',
      title: 'Party on the beach',
      date: '13.05.2023'
    },
    {
      id: '05',
      title: 'Home Security',
      date: '13.06.2023'
    },
    {
      id: '06',
      title: 'Network Design & Implementation',
      date: '13.07.2023'
    },
    {
      id: '07',
      title: 'System Design & Engineering',
      date: '13.08.2023'
    },
    {
      id: '08',
      title: 'Client Care Plans',
      date: '13.09.2023'
    }
  ];
  return (
    <div className={styles.page}>
      <h2
        className={classNames(styles.page__title, animate && styles.page__title_animate)}
        id='events'
      >
        All events
      </h2>
      <ul className={styles.page__accordion}>
        {events.map(item => {
          return (
          <li
            key={item.id}
            id={item.id}
            className={classNames(styles.page__accordion__item, active === item.id && styles.page__accordion__item__active)}
            onClick={openItem}
          >
            <div className={styles.page__accordion__item__title}>
              <p>{item.id}</p>
              <p>{item.title}</p>
            </div>
            <div className={styles.page__accordion__item__panel}>
              <div className={styles.page__accordion__item__panel__content}>
                <p className={styles.page__accordion__item__panel__content__number}>
                  {item.id}
                </p>
                <p className={styles.page__accordion__item__panel__content__title}>
                  {item.title}
                </p>
                <p className={styles.page__accordion__item__panel__content__date}>
                  {item.date}
                </p>
                <a
                  className={styles.page__accordion__item__panel__content__link}
                  href='https://leadadvisors.org'
                  title='lead advisors'
                  target='_blank'
                  rel='noreferrer'
                >
                  More information
                </a>
              </div>
            </div>
          </li>
        )
        })}
      </ul>
    </div>
  );
};

export default EventsPage;