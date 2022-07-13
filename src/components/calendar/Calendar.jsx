import Modal from '../modal/Modal';
import React, { useState, useEffect } from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import {
  fetchEventsList,
  onCreateEvent,
  onDeleteEvent,
} from '../../gateway/eventGateway.jsx';
import './calendar.scss';
import PropTypes from 'prop-types';

const Calendar = ({ weekDates, onModal, handleModalClose }) => {
  const [events, setEvents] = useState([]);

  const fetchEvents = () => {
    fetchEventsList()
      .then((eventsList) =>
        setEvents(
          eventsList.map((event) => ({
            ...event,
            dateFrom: new Date(event.dateFrom),
            dateTo: new Date(event.dateTo),
          }))
        )
      )
      .catch(() => alert('Server Error'));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const createEvent = (eventData) => {
    onCreateEvent(eventData).then(() => fetchEvents());
  };

  const deleteEvent = (id) => {
    onDeleteEvent(id).then(() => fetchEvents());
  };

  return (
    <section className="calendar gray-line">
      {!onModal ? null : (
        <Modal
        handleModalClose={handleModalClose}
          createEvent={createEvent}
        />
      )}
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container ">
          <Sidebar />
          <Week
            weekDates={weekDates}
            events={events}
            deleteEvent={deleteEvent}
          />
        </div>
      </div>
    </section>
  );
};

Calendar.propTypes = {
  weekDates: PropTypes.array.isRequired,
  onModal: PropTypes.bool.isRequired,
  handleModalClose: PropTypes.func.isRequired,
};

export default Calendar;
