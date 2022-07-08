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



// class App extends Component {
//   state = {
//     weekStartDate: new Date(),
//     onModal: false,
//   };

//   nextWeek = () => {
//     this.setState({
//       weekStartDate: new Date(
//         this.state.weekStartDate.setDate(this.state.weekStartDate.getDate() + 7)
//       ),
//     });
//   };

//   prevWeek = () => {
//     this.setState({
//       weekStartDate: new Date(
//         this.state.weekStartDate.setDate(this.state.weekStartDate.getDate() - 7)
//       ),
//     });
//   };

//   today = () => {
//     this.setState({
//       weekStartDate: new Date(),
//     });
//   };

//   handleOnModal = () => {
//     this.setState({
//       onModal: true,
//     });
//   };

//   handleDeletefModal = () => {
//     this.setState({
//       onModal: false,
//     });
//   };

//   render() {
//     const { weekStartDate } = this.state;
//     const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

//     return (
//       <>
//         <Header
//           weekDates={weekDates}
//           nextWeek={this.nextWeek}
//           prevWeek={this.prevWeek}
//           today={this.today}
//           handleOnModal={this.handleOnModal}
//         />
//         <Calendar
//           weekDates={weekDates}
//           onModal={this.state.onModal}
//           // handleOnModal={this.handleOnModal}
//           handleDeletefModal={this.handleDeletefModal}
//         />
//       </>
//     );
//   }
// }

// export default App;
