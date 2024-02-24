import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment, useEffect, useState } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { getStaticPaths, getStaticProps } from 'next';

const Fullcalendar = () => {

  let eventGuid = 0;
  const todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
  const INITIAL_EVENTS = [
    {
      id: createEventId(),
      title: "Meeting",
      start: todayStr,
    },
    {
      id: createEventId(),
      title: "Meeting Time",
      start: todayStr + "T16:00:00",
    },
  ];

  function createEventId() {
    return String(eventGuid++);
  }
  const initialstate1 = {
    calendarEvents: [
      {
        title: "Atlanta Monster",
        start: new Date("2019-04-04 00:00"),
        id: "1001",
      },
      {
        title: "My Favorite Murder",
        start: new Date("2019-04-05 00:00"),
        id: "1002",
      },
    ],

    events: [
      {
        title: "Calendar Events",
        id: "1",
        bg: "bg-primary",
      },
      {
        title: "Birthday Events",
        id: "2",
        bg: " bg-secondary",
      },
      {
        title: "Holiday Calendar",
        id: "3",
        bg: "bg-success",
      },
      {
        title: "Office Events",
        id: "4", bg: "bg-info",
        border: "border-info"
      },
      {
        title: "Other Events",
        id: "5",
        bg: "bg-warning",
      },
      {
        title: "Festival Events",
        id: "6",
        bg: "bg-danger",
      },
      {
        title: "Timeline Events",
        id: "7",
        bg: "bg-teal",
      },
    ],
  };
  const [state] = useState(initialstate1);

  useEffect(() => {
    const draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        const title = eventEl.getAttribute("title");
        const id = eventEl.getAttribute("data");
        const classValue = eventEl.getAttribute("class");
        return {
          title: title,
          id: id,
          className: classValue,
        };
      },
    });
  }, []);

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }
  const handleEventClick = (clickInfo) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };
  const handleEvents = () => { };

  const handleDateSelect = (selectInfo) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  return (
    <Fragment>
      <Seo title={"Full Calendar"} />
      <Pageheader currentpage="Full Calendar" activepage="Apps" mainpage="Full Calendar" />
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-3 col-span-12">
          <div className="box custom-box">
            <div className="py-4 px-[1.25rem] border-b dark:border-defaultborder/10  !grid">
              <button type="button" className="ti-btn ti-btn-primary"><i className="ri-add-line align-middle me-1 font-semibold inline-block"></i>Create New Event</button>
            </div>
            <div className="box-body !p-0">
              <div id="external-events" className="border-b dark:border-defaultborder/10 p-4">
                <div
                  className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event !bg-primary border !border-primary">
                  <div className="fc-event-main">Calendar Events</div>
                </div>
                <div
                  className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event !bg-secondary border !border-secondary"
                  data-classname="bg-secondary">
                  <div className="fc-event-main">Birthday EVents</div>
                </div>
                <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event !bg-success border !border-success"
                  data-classname="bg-success">
                  <div className="fc-event-main">Holiday Calendar</div>
                </div>
                <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event !bg-info border !border-info"
                  data-classname="bg-info">
                  <div className="fc-event-main">Office Events</div>
                </div>
                <div
                  className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event !bg-warning border !border-warning"
                  data-classname="bg-warning">
                  <div className="fc-event-main">Other Events</div>
                </div>
                <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event !bg-danger border !border-danger"
                  data-classname="bg-danger">
                  <div className="fc-event-main">Festival Events</div>
                </div>
                <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event !bg-teal border !border-teal"
                  data-classname="bg-danger">
                  <div className="fc-event-main">Timeline Events</div>
                </div>
              </div>
              <div className="p-4 border-b dark:border-defaultborder/10 ">
                <div className="flex items-center mb-4 justify-between">
                  <h6 className="font-semibold">
                    Activity :
                  </h6>
                  <button type="button" className="ti-btn !py-1 !px-2 !text-[0.75rem] ti-btn-primary btn-wave">View All</button>
                </div>
                <ul className="list-none mb-0 fullcalendar-events-activity" id="full-calendar-activity">
                  <li>
                    <div className="flex items-center justify-between flex-wrap">
                      <p className="mb-1 font-semibold">
                        Monday, Jan 1,2023
                      </p>
                      <span className="badge bg-light text-default mb-1">12:00PM - 1:00PM</span>
                    </div>
                    <p className="mb-0 text-mutedtext-[0.75rem]">
                      Meeting with a client about new project requirement.
                    </p>
                  </li>
                  <li>
                    <div className="flex items-center justify-between flex-wrap">
                      <p className="mb-1 font-semibold">
                        Thursday, Dec 29,2022
                      </p>
                      <span className="badge bg-success text-white mb-1">Completed</span>
                    </div>
                    <p className="mb-0 text-muted text-[0.75rem]">
                      Birthday party of niha suka
                    </p>
                  </li>
                  <li>
                    <div className="flex items-center justify-between flex-wrap">
                      <p className="mb-1 font-semibold">
                        Wednesday, Jan 3,2023
                      </p>
                      <span className="badge bg-warning/10 text-warning mb-1">Reminder</span>
                    </div>
                    <p className="mb-0 text-mutedtext-[0.75rem]">
                      WOrk taget for new project is completing
                    </p>
                  </li>
                  <li>
                    <div className="flex items-center justify-between flex-wrap">
                      <p className="mb-1 font-semibold">
                        Friday, Jan 20,2023
                      </p>
                      <span className="badge bg-light text-default mb-1">06:00PM - 09:00PM</span>
                    </div>
                    <p className="mb-0 text-mutedtext-[0.75rem]">
                      Watch new movie with family
                    </p>
                  </li>
                  <li>
                    <div className="flex items-center justify-between flex-wrap">
                      <p className="mb-1 font-semibold">
                        Saturday, Jan 07,2023
                      </p>
                      <span className="badge bg-danger/10 text-danger mb-1">Due Date</span>
                    </div>
                    <p className="mb-0 text-muted text-[0.75rem]">
                      Last day to pay the electricity bill and water bill.need to check the bank details.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="p-4">
                <img src="../../../assets/images/media/media-83.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-9 col-span-12">
          <div className="box custom-box">
            <div className="box-header">
              <div className="box-title">Full Calendar</div>
            </div>
            <div className="box-body">
              <div id="calendar2">
                <FullCalendar plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin,]}
                  headerToolbar={{ left: "prev,next today", center: "title", right: "dayGridMonth,timeGridWeek,timeGridDay", }}
                  initialView="dayGridMonth" editable={true} selectable={true} selectMirror={true} dayMaxEvents={true}
                  initialEvents={INITIAL_EVENTS} select={handleDateSelect} eventContent={renderEventContent} eventClick={handleEventClick}
                  eventsSet={handleEvents}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
Fullcalendar.layout = "Contentlayout"

export default Fullcalendar