import React from 'react';
import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';
import RedLine from './RedLine';
import PropTypes from 'prop-types';

const Hour = ({ dataHour, hourEvents, deleteEvent, isCurrentTimeSlot }) => {
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {isCurrentTimeSlot && <RedLine />}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(
          dateFrom.getMinutes()
        )}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(
          dateTo.getMinutes()
        )}`;

        return (
          <Event
            key={id}
            id={id}
            //calculating event height = duration of event in minutes
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            deleteEvent={deleteEvent}
          />
        );
      })}
    </div>
  );
};

Hour.propTypes = {
  dataHour: PropTypes.number.isRequired,
  hourEvents: PropTypes.array.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  isCurrentTimeSlot: PropTypes.bool.isRequired,
};

export default Hour;
