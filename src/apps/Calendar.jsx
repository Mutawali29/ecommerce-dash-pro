import React, { useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { IoAdd, IoArrowBack, IoArrowForward, IoCalendar } from 'react-icons/io5';
import 'tailwindcss/tailwind.css'; 

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [eventData, setEventData] = useState({ title: '', start: new Date(), end: new Date() });
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectSlot = (slotInfo) => {
    setEventData({ title: '', start: slotInfo.start, end: slotInfo.end });
    setShowDialog(true);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setEventData({
      title: event.title,
      start: event.start,
      end: event.end,
    });
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    setSelectedEvent(null);
  };

  const handleSaveEvent = () => {
    if (selectedEvent) {
      const updatedEvents = events.map((e) =>
        e === selectedEvent ? { ...eventData, start: new Date(eventData.start), end: new Date(eventData.end) } : e
      );
      setEvents(updatedEvents);
    } else {
      setEvents([...events, { ...eventData, start: new Date(eventData.start), end: new Date(eventData.end) }]);
    }
    handleCloseDialog();
  };

  const handleDeleteEvent = () => {
    setEvents(events.filter((e) => e !== selectedEvent));
    handleCloseDialog();
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-center text-4xl font-bold mb-6 text-gray-900">Calendar</h1>
      
      <div className="mb-6 flex flex-wrap justify-between items-center space-y-4 md:space-y-0">
        <div className="flex space-x-2">
          <Button
            variant="contained"
            style={{ backgroundColor: '#22d3ee', color: '#ffffff' }}
            className="rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            onClick={() => setShowDialog(true)}
          >
            <IoAdd className="text-lg" />
          </Button>

          <Button
            variant="contained"
            style={{ backgroundColor: '#22d3ee', color: '#ffffff' }}
            className="rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            onClick={() => { /* Logic for "Today" */ }}
          >
            <IoCalendar className="text-lg" />
          </Button>
        </div>

        <div className="flex flex-wrap space-x-2">
          <Button
            variant="outlined"
            style={{ borderColor: '#22d3ee', color: '#22d3ee' }}
            className="rounded-full shadow-md hover:bg-cyan-100"
            onClick={() => { /* Logic for "Back" */ }}
          >
            <IoArrowBack className="text-lg" />
          </Button>
          <Button
            variant="outlined"
            style={{ borderColor: '#22d3ee', color: '#22d3ee' }}
            className="rounded-full shadow-md hover:bg-cyan-100"
            onClick={() => { /* Logic for "Next" */ }}
          >
            <IoArrowForward className="text-lg" />
          </Button>
          <Button
            variant="outlined"
            style={{ borderColor: '#22d3ee', color: '#22d3ee' }}
            className="rounded-full shadow-md hover:bg-cyan-100"
            onClick={() => { /* Logic for "Month" */ }}
          >
            Month
          </Button>
          <Button
            variant="outlined"
            style={{ borderColor: '#22d3ee', color: '#22d3ee' }}
            className="rounded-full shadow-md hover:bg-cyan-100"
            onClick={() => { /* Logic for "Week" */ }}
          >
            Week
          </Button>
          <Button
            variant="outlined"
            style={{ borderColor: '#22d3ee', color: '#22d3ee' }}
            className="rounded-full shadow-md hover:bg-cyan-100"
            onClick={() => { /* Logic for "Day" */ }}
          >
            Day
          </Button>
        </div>
      </div>

      <div className="h-[70vh] bg-white rounded-lg shadow-lg">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '100%' }}
          views={[Views.MONTH, Views.WEEK, Views.DAY]}
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          selectable
          popup
          eventPropGetter={(event) => ({
            style: {
              backgroundColor: event.color || '#38bdf8',
              borderRadius: '8px',
              border: '1px solid #ddd',
              color: '#fff',
              fontWeight: 'bold',
            },
          })}
        />
      </div>

      <Dialog
        open={showDialog}
        onClose={handleCloseDialog}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        fullWidth
        PaperProps={{ style: { borderRadius: '12px', boxShadow: '0px 4px 20px rgba(0,0,0,0.1)' } }}
      >
        <DialogTitle id="form-dialog-title" className="text-2xl font-bold">
          {selectedEvent ? 'Edit Event' : 'Add Event'}
        </DialogTitle>
        <DialogContent className="p-6">
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            value={eventData.title}
            onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
            variant="outlined"
            className="mb-4"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#22d3ee',
                },
                '&:hover fieldset': {
                  borderColor: '#22d3ee',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#22d3ee',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#22d3ee',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#22d3ee',
              },
            }}
          />

          <TextField
            margin="dense"
            label="Start Time"
            type="datetime-local"
            fullWidth
            value={moment(eventData.start).format('YYYY-MM-DDTHH:mm')}
            onChange={(e) => setEventData({ ...eventData, start: new Date(e.target.value) })}
            variant="outlined"
            className="mb-4"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#22d3ee',
                },
                '&:hover fieldset': {
                  borderColor: '#22d3ee',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#22d3ee',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#22d3ee',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#22d3ee',
              },
            }}
          />

          <TextField
            margin="dense"
            label="End Time"
            type="datetime-local"
            fullWidth
            value={moment(eventData.end).format('YYYY-MM-DDTHH:mm')}
            onChange={(e) => setEventData({ ...eventData, end: new Date(e.target.value) })}
            variant="outlined"
            className="mb-4"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#22d3ee',
                },
                '&:hover fieldset': {
                  borderColor: '#22d3ee',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#22d3ee',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#22d3ee',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#22d3ee',
              },
            }}
          />
        </DialogContent>

        <DialogActions>
          {selectedEvent && (
            <Button onClick={handleDeleteEvent} color="error" variant="contained">
              Delete
            </Button>
          )}
          <Button
            onClick={handleCloseDialog}
            variant="outlined"
            sx={{
              borderColor: '#22d3ee',
              color: '#22d3ee',
              '&:hover': {
                backgroundColor: '#e0f7fa',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSaveEvent}
            variant="contained"
            sx={{
              backgroundColor: '#22d3ee',
              '&:hover': {
                backgroundColor: '#0ea5e9',
              },
            }}
          >
            {selectedEvent ? 'Update' : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CalendarComponent;
