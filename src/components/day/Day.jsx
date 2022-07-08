import React from 'react';
import Hour from '../hour/Hour';
import './day.scss';
import PropTypes from 'prop-types'

const Day = ({ dataDay, dayEvents, isCurrentTime, deleteEvent }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );
        const isCurrentTimeSlot = isCurrentTime
          ? new Date().getHours() === hour
          : false;
        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            isCurrentTimeSlot={isCurrentTimeSlot}
            deleteEvent={deleteEvent}
          />
        );
      })}
    </div>
  );
};

Day.PropTypes = {
  dataDay: PropTypes.number.isRequired,
  dayEvents: PropTypes.array.isRequired,
  isCurrentTime: PropTypes.bool.isRequired,
  deleteEvent: PropTypes.func.isRequired,
}

export default Day;
