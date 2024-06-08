"use client";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useEffect, useState } from "react";
import { EVENTS_DATA } from "@/constants/eventData";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(EVENTS_DATA);
  }, [events]);

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        className="p-8 rounded-lg bg-background shadow-xl w-full md:w-3/4 lg:w-1/2"
      />
    </div>
  );
};

export default EventsPage;
