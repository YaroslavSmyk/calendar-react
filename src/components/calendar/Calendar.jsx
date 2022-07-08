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

const Calendar = ({ weekDates, onModal, handleDeletefModal }) => {
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
          handleDeletefModal={handleDeletefModal}
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

Calendar.PropTypes = {
  weekDates: PropTypes.array.isRequired,
  onModal: PropTypes.bool.isRequired,
  handleDeletefModal: PropTypes.func.isRequired,
};

export default Calendar;

// class Calendar extends Component {
//   state = {
//     events: [],
//   };

//   fetchEvents = () => {
//     fetchEventsList()
//       .then((eventsList) =>
//         this.setState({
//           events: eventsList.map((event) => ({
//             ...event,
//             dateFrom: new Date(event.dateFrom),
//             dateTo: new Date(event.dateTo),
//           })),
//         })
//       )
//       .catch(() => alert('Server Error'));
//   };

//   componentDidMount() {
//     this.fetchEvents();
//   }

//   createEvent = (eventData) => {
//     onCreateEvent(eventData).then(() => this.fetchEvents());
//   };

//   deleteEvent = (id) => {
//     onDeleteEvent(id).then(() => this.fetchEvents());
//   };

//   render() {
//     const { weekDates } = this.props;
//     return (
//       <section className="calendar gray-line">
//         {!this.props.onModal ? null : (
//           <Modal
//             handleDeletefModal={this.props.handleDeletefModal}
//             createEvent={this.createEvent}
//           />
//         )}
//         <Navigation weekDates={weekDates} />
//         <div className="calendar__body " onClick={this.props.handleOnModal}>
//           <div className="calendar__week-container ">
//             <Sidebar />
//             <Week
//               weekDates={weekDates}
//               events={this.state.events}
//               deleteEvent={this.deleteEvent}
//             />
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default Calendar;
