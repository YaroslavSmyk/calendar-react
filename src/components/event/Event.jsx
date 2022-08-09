import React, { Component } from 'react';
import { useState } from 'react';
import './event.scss';
import PropTypes from 'prop-types';

const Event = ({ id, height, marginTop, time, title, deleteEvent }) => {
  const [isEvent, setIsEvent] = useState(true);
  const [isVisibleBtn, setIsVisibleBtn] = useState(false);

  const eventStyle = {
    height,
    marginTop,
  };
  return (
    <>
      <div
        style={eventStyle}
        className="event"
        onClick={() => {
          setIsEvent(false);
          setIsVisibleBtn(true);
        }}
      >
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>
      {isVisibleBtn && (
        <div>
          <button
            type="button"
            className="close-btn__delete"
            onClick={() => setIsVisibleBtn(false)}
          >
            +
          </button>
          <button className="delete-event-btn" onClick={() => deleteEvent(id)}>
            <i className="fas fa-trash"></i> Delete
          </button>
        </div>
      )}
    </>
  );
};
Event.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};

export default Event;
