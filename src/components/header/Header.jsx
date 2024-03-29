import React from 'react';
import moment from 'moment';
import './header.scss';
import PropTypes from 'prop-types';

const Header = ({
  weekDates,
  getToday,
  prevWeek,
  nextWeek,
  handleModalOpen,
}) => {
  const monthOfFirstDayOfWeek = moment(weekDates[0]).format('MMM');
  const monthOfLastDayOfWeek = moment(weekDates[6]).format('MMM');
  const month =
    monthOfFirstDayOfWeek === monthOfLastDayOfWeek
      ? monthOfFirstDayOfWeek
      : `${monthOfFirstDayOfWeek} - ${monthOfLastDayOfWeek}`;

  return (
    <header className="header">
      <button className="button create-event-btn" onClick={handleModalOpen}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={getToday}>
          Today
        </button>
        <button className="icon-button navigation__nav-icon" onClick={prevWeek}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={nextWeek}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{month}</span>
      </div>
    </header>
  );
};

Header.propTypes = {
  weekDates: PropTypes.array.isRequired,
  getToday: PropTypes.func.isRequired,
  prevWeek: PropTypes.func.isRequired,
  nextWeek: PropTypes.func.isRequired,
  handleModalOpen: PropTypes.func.isRequired,
};

export default Header;
