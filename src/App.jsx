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

  const getToday = () => {
    setWeekStartDate(new Date());
  };

  const handleModalOpen = () => {
    setOnModal(true);
  };

  const handleModalClose = () => {
    setOnModal(false);
  };

  return (
    <>
      <Header
        weekDates={weekDates}
        nextWeek={nextWeek}
        prevWeek={prevWeek}
        getToday={getToday}
        handleModalOpen={handleModalOpen}
      />
      <Calendar
        weekDates={weekDates}
        onModal={onModal}
        handleModalClose={handleModalClose}
      />
    </>
  );
};
export default App;
