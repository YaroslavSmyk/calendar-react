import React, { Component } from 'react';
import moment from 'moment';
import './modal.scss';
import { getDateTime } from '../../utils/dateUtils';
import { onCreateEvent } from '../../gateway/eventGateway';

class Modal extends Component {
  state = {
    title: '',
    date: moment(new Date()).format('YYYY-MM-DD'),
    startTime: moment(new Date()).format('HH:mm'),
    endTime: moment(new Date()).format('HH:mm'),
    description: '',
  };

  onChangeInputInModal = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  onSubmitModal = (event) => {
    event.preventDefault();

    const { title, date, startTime, endTime, description } = this.state;

    const currentEvent = {
      title,
      description,
      dateFrom: getDateTime(date, startTime),
      dateTo: getDateTime(date, endTime),
    };

    this.props.createEvent(currentEvent);
    this.setState({
      title: '',
      description: '',
      date: '',
      startTime: '',
      endTime: '',
    });
    this.props.handleDeletefModal();
  };

  render() {
    return (
      <div className="modal overlay">
        <div className="modal__content">
          <div className="create-event">
            <button
              className="create-event__close-btn"
              onClick={this.props.handleDeletefModal}
            >
              +
            </button>
            <form className="event-form">
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="event-form__field"
                value={this.state.title}
                onChange={this.onChangeInputInModal}
              />
              <div className="event-form__time">
                <input
                  type="date"
                  name="date"
                  className="event-form__field"
                  value={this.state.date}
                  onChange={this.onChangeInputInModal}
                />
                <input
                  type="time"
                  name="startTime"
                  className="event-form__field"
                  value={this.state.startTime}
                  onChange={this.onChangeInputInModal}
                />
                <span>-</span>
                <input
                  type="time"
                  name="endTime"
                  className="event-form__field"
                  value={this.state.endTime}
                  onChange={this.onChangeInputInModal}
                />
              </div>
              <textarea
                name="description"
                placeholder="Description"
                className="event-form__field"
                value={this.state.description}
                onChange={this.onChangeInputInModal}
              ></textarea>
              <button
                type="submit"
                className="event-form__submit-btn"
                onClick={this.onSubmitModal}
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
