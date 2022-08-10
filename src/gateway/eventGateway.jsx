const baseUrl = 'https://62eaab3b3a5f1572e8811d96.mockapi.io/events';

export const onCreateEvent = (eventData) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Couldn`t create');
    }
  });
};
export const fetchEventsList = () => {
  return fetch(baseUrl).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
};

export const onDeleteEvent = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Couldn`t delete');
    }
  });
};
