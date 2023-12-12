import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export const ItemEvent = () => {
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
      <section className="main">
        <div className="container">
          <div className="main__flex">
            <h1 className="main__heading">EVENT</h1>
            <div className="main__slider">
              <ul className="main__slider--list">
                <li className="main__slider--item">
                  <img
                    className="main__slider--img"
                    src="/images/event/event_image01.webp"
                    alt=""
                    height=""
                    width=""
                  />
                </li>
                <li className="main__slider--item">
                  <img
                    className="main__slider--img"
                    src="/images/event/event_image02.webp"
                    alt=""
                    height=""
                    width=""
                  />
                </li>
                <li className="main__slider--item">
                  <img
                    className="main__slider--img"
                    src="/images/event/event_image03.webp"
                    alt=""
                    height=""
                    width=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
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
    </>
  );
};
