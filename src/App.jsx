import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [onModal, setOnModal] = useState(false);
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const nextWeek = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(weekStartDate.getDate() + 7))
    );
  };

  const prevWeek = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(weekStartDate.getDate() - 7))
    );
  };

  const today = () => {
    setWeekStartDate(new Date());
  };

  const handleOnModal = () => {
    setOnModal(true);
  };

  const handleDeletefModal = () => {
    setOnModal(false);
  };

  return (
    <>
      <Header
        weekDates={weekDates}
        nextWeek={nextWeek}
        prevWeek={prevWeek}
        today={today}
        handleOnModal={handleOnModal}
      />
      <Calendar
        weekDates={weekDates}
        onModal={onModal}
        handleDeletefModal={handleDeletefModal}
      />
    </>
  );
};
export default App;

