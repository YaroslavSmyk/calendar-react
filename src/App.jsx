import React, { Component, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';
import Modal from './components/modal/Modal.jsx';

class App extends Component {
  // const [weekStartDate, setWeekStartDate] = useState();
  state = {
    weekStartDate: new Date(),
    onModal: false,
  };

  nextWeek = () => {
    this.setState({
      weekStartDate: new Date(
        this.state.weekStartDate.setDate(this.state.weekStartDate.getDate() + 7)
      ),
    });
  };

  prevWeek = () => {
    this.setState({
      weekStartDate: new Date(
        this.state.weekStartDate.setDate(this.state.weekStartDate.getDate() - 7)
      ),
    });
  };

  today = () => {
    this.setState({
      weekStartDate: new Date(),
    });
  };

  handleOnModal = () => {
    this.setState({
      onModal: true,
    });
  };

  handleDeletefModal = () => {
    this.setState({
      onModal: false,
    });
  };

  render() {
    const { weekStartDate } = this.state;
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    return (
      <>
        <Header
          weekDates={weekDates}
          nextWeek={this.nextWeek}
          prevWeek={this.prevWeek}
          today={this.today}
          handleOnModal={this.handleOnModal}
        />
        <Calendar
          weekDates={weekDates}
          onModal={this.state.onModal}
          // handleOnModal={this.handleOnModal}
          handleDeletefModal={this.handleDeletefModal}
        />
      </>
    );
  }
}

export default App;
