import React, { Component } from 'react';
import { useState } from 'react';
import './event.scss';

class Event extends Component {
  state = {
    isEvent: true,
    isVisibleBtn: false,
  };

  onChange = () => {
    this.setState({
      isEvent: false,
      isVisibleBtn: true,
    });
    console.log(12312)
  };


  // const [isEvent, setisEvent] = useState(true);
  // onChange = (isEvent) => {
  //   setisEvent({
  //     isEvent: false,
  //   });
  // };

  // {/* <div style={eventStyle} */}
  render() {
    const eventStyle = {
      height: this.props.height,
      marginTop: this.props.marginTop,
    };

    return (
      <>
      <div style={eventStyle} className="event" onClick={this.onChange}>
        <div className="event__title">{this.props.title}</div>
        <div className="event__time">{this.props.time}</div>
        </div>
        {this.state.isVisibleBtn && (
          <button
            className="delete-event-btn"
            onClick={() => this.props.deleteEvent(this.props.id)}
          > <i class="fas fa-trash"></i> Delete</button>
          
        )}
        </>
    );
  }
}
export default Event;

// { height, marginTop, title, time }
