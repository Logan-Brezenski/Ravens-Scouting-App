// TBAInterface funcitons to pull data from TheBlueAlliance.com
import React, { useState, useEffect } from 'react';
import { fetchEvents } from './api';  // Adjust the import based on your file structure
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const textFieldStyles = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'purple',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'blue',
  },
  '& .MuiFormLabel-root': {
    color: 'blue',
  },
  '& .MuiFormControlLabel-label': {
    color: 'blue',
  }
};

const inputPropsStyles = {
  style: {
    color: 'blue',
  },
};

function Event() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState('');

  useEffect(() => {
    const getEvents = async () => {
      const eventList = await fetchEvents();
      setEvents(eventList);
    };
    getEvents();
  }, []);

  const handleEventChange = (event) => {
    setSelectedEvent(event.target.value);
  };

  return (
    <TextField
      select
      required
      id="outlined-required"
      label="Event"
      value={selectedEvent}
      onChange={handleEventChange}
      variant="outlined"
      color="secondary"
      className="Event"
      sx={textFieldStyles}
      InputProps={inputPropsStyles}
    >
      {events.map((event) => (
        <MenuItem key={event.key} value={event.key}>
          {event.name}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default Event;
