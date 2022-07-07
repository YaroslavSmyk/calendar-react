import React from 'react';
import moment from 'moment';
import { days } from '../../utils/dateUtils.js';
import classNames from 'classnames';

const Navigation = ({ weekDates }) => (
  <header className="calendar__header">
    {weekDates.map((dayDate) => {
      const isToday =
        moment(new Date()).format('MMMM DD YYYY') ===
        moment(dayDate).format('MMMM DD YYYY');

      const dayNameClasses = classNames('calendar__day-label day-label', {
        'current-name': isToday,
      });
      const dayNumberClasses = classNames('day-label__day-number', {
        'current-number': isToday,
      });
      return (
        <div key={dayDate.getDate()} className={dayNameClasses}>
          <span className={dayNameClasses}>{days[dayDate.getDay()]}</span>
          <span className={dayNumberClasses}>{dayDate.getDate()}</span>
        </div>
      );
    })}
  </header>
);

export default Navigation;
