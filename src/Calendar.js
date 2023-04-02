import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useState } from 'react';

function Calendar() {
  const [events, setEvents] = useState([])

  const addEvent = () => {
    const title = prompt('Enter the event title:')
    const date = prompt('Enter the event date(YYYY-MM-DD):')
    if(title && date){
        setEvents([...events, {title: title, date: date}])
    }
  }

  return (
    <div className='main-wrapper'>
      <div><button onClick={event => addEvent()}>Add Event</button></div>
        <div className='calendar-main'>      
            <FullCalendar 
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            events={events}
            />
        </div>
    </div>
  );
}

export default Calendar;
