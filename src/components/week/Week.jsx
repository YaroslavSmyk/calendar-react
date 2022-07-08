import React from 'react';
import Day from '../day/Day';
import moment from 'moment';
import './week.scss';
import PropTypes from 'prop-types';

const Week = ({ weekDates, events, deleteEvent }) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );
        const isCurrentTime =
          moment(dayStart).format('MMMM DD YYYY') ===
          moment(new Date()).format('MMMM DD YYYY');

        //getting all events from the day we will render
        const dayEvents = events.filter(
          (event) => event.dateFrom > dayStart && event.dateTo < dayEnd
        );

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            isCurrentTime={isCurrentTime}
            deleteEvent={deleteEvent}
          />
        );
      })}
    </div>
  );
};

Week.PropTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  deleteEvent: PropTypes.func.isRequired,
}

export default Week;
