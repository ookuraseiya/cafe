import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FadeIn } from '../components/animations/FadeIn';
import { PageTop } from '../components/common/PageTop';

export const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://holidays-jp.github.io/api/v1/date.json', { method: 'GET' })
      .then((response) => response.json())
      .then((json) => {
        const event = Object.entries(json).map(([date, title]) => ({
          title: title,
          start: date,
        }));
        setEvents(event);
      })
      .catch((error) => console.error('エラー:', error));
  }, []);

  return (
    <>
      <FadeIn>
        <PageTop
          TopText={'EVENT'}
          TopImage={'/images/event/event_image01.webp'}
          TopImage_2={'/images/event/event_image02.webp'}
          TopImage_3={'/images/event/event_image03.webp'}
        />
        <section className="event">
          <h1 className="access__heading" data-en="Recruit">
            EVENT
          </h1>
          <p className="access__heading--sub">イベント</p>
          <div>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              locale="ja"
              headerToolbar={{
                start: 'prev,next today',
                center: 'title',
                end: 'dayGridMonth,timeGridWeek,timeGridDay',
              }}
              customButtons={{
                new: {
                  text: 'new',
                  click: () => console.log('new event'),
                },
              }}
              selectMirror={true}
              dayMaxEvents={true}
              navLinks={true}
              businessHours={true}
              handleWindowResize={true}
              initialView="dayGridMonth"
              events={events}
              eventColor="rgba(164,140,97,0.7)"
            />
          </div>
        </section>
      </FadeIn>
    </>
  );
};
