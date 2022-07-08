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
        <button className="delete-event-btn" onClick={() => deleteEvent(id)}>
          <i className="fas fa-trash"></i> Delete
        </button>
      )}
    </>
  );
};
Event.PropTypes = {
  id: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  title: PropTypes.array.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};

export default Event;

// class Event extends Component {
//   state = {
//     isEvent: true,
//     isVisibleBtn: false,
//   };

//   onChange = () => {
//     this.setState({
//       isEvent: false,
//       isVisibleBtn: true,
//     });
//   };

//   render() {
//     const eventStyle = {
//       height: this.props.height,
//       marginTop: this.props.marginTop,
//     };

//     return (
//       <>
//         <div style={eventStyle} className="event" onClick={this.onChange}>
//           <div className="event__title">{this.props.title}</div>
//           <div className="event__time">{this.props.time}</div>
//         </div>
//         {this.state.isVisibleBtn && (
//           <button
//             className="delete-event-btn"
//             onClick={() => this.props.deleteEvent(this.props.id)}
//           >
//             {' '}
//             <i class="fas fa-trash"></i> Delete
//           </button>
//         )}
//       </>
//     );
//   }
// }
