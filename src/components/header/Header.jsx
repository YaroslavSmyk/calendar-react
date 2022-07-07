import React from 'react';
import moment from 'moment';
import './header.scss';

const Header = ({ weekDates, today, prevWeek, nextWeek, handleOnModal, handleDeletefModal }) => {
  // console.log(weekDates);
  const monthOfFirstDayOfWeek = moment(weekDates[0]).format('MMM');
  const monthOfLastDayOfWeek = moment(weekDates[6]).format('MMM');
  // console.log(firstDayOfWeek, lastDayOfWeek)
  const month =
    monthOfFirstDayOfWeek === monthOfLastDayOfWeek
      ? monthOfFirstDayOfWeek
      : `${monthOfFirstDayOfWeek} - ${monthOfLastDayOfWeek}`;



  return (
    <header className="header" >
      <button className="button create-event-btn" onClick={handleOnModal}>
        <i className="fas fa-plus create-event-btn__icon" ></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={today}>Today</button>
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

export default Header;
