import React from "react";
import { formatAMPM, getDay, getDayName } from "../utils/DateHelpers";
import "../Styles/events.css";
import { Link } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Event({ event }) {
  const { width, height } = useWindowDimensions();

  if (!event) return null;

  const startDay = getDayName(event.Event_Start);
  const startDate = getDay(event.Event_Start);
  const endDay = getDayName(event.Event_END);
  const endDate = getDay(event.Event_END);

  return (
    <div className="events-container">
      <div className="event-card">
        <div>{startDay}</div>
        <div>
          <h5>{startDate}</h5>
        </div>
      </div>
      <div className="event-card">
        <div>
          {`${startDay} ${startDate} @ ${formatAMPM(
            event.Event_Start
          )} - ${endDay} ${endDate} @ ${formatAMPM(event.Event_END)}`}
        </div>
        <div className="primary-text">
          <h5>{event.Event_Title}</h5>
        </div>
        <div className="secondary-text">
          {event.Event_Location}
        </div>
        <div>{event.Event_Description}</div>
        <div>
          <Link to="registerEvent" state={{ event }}>
            RSVP now
          </Link>
        </div>
      </div>
      <div className="event-card">
        <div>
          <img src="https://picsum.photos/370/180" alt="event photo" />
        </div>
      </div>
    </div>
  );
}
