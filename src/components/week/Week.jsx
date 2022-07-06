import React from 'react';
import Day from '../day/Day';
import moment from 'moment';
import './week.scss';

const Week = ({ weekDates, events, deleteEvent }) => {
  // console.log(weekDates, events )
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
        // console.log(dayEvents)

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

export default Week;
