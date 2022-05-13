import * as React from "react";
import { Link } from "react-router-dom";
import AddToCalendarHOC from "react-add-to-calendar-hoc";
import useWindowDimensions from "../hooks/useWindowDimensions";
import {
  diff_hours,
  formatAMPM,
  formatToCalendarDate,
  getDay,
  getDayName,
} from "../utils/DateHelpers";
import { UsersURL } from "../Constants/AppLinks";

const ATCDropdown = (args) => (
  <ul className="atc-dropdown">
    {args.children.map((link, i) => (
      <li key={i}>{link}</li>
    ))}
  </ul>
);

const ATCWrapper = (args) => (
  <a onClick={args.onClick} className="atc-item" href="/">
    {args.children}
  </a>
);

function EventInfo({ event }) {
  const { width, height } = useWindowDimensions();
  const [organizer, setOrganizer] = React.useState(null);

  React.useEffect(() => {
    fetch(`${UsersURL}/${event.Event_Organizer_Id}`)
      .then((res) => res.json())
      .then((result) => {
        setOrganizer(result.users[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!event || !organizer) return null;

  const startDay = getDayName(event.Event_Start);
  const startDate = getDay(event.Event_Start);
  const endDay = getDayName(event.Event_END);
  const endDate = getDay(event.Event_END);
  const duration = diff_hours(
    new Date(event.Event_Start),
    new Date(event.Event_END)
  );

  const calendarEvent = {
    title: event.Event_Title,
    description: event.Event_Description,
    location: event.Event_Location,
    duration,
    startDatetime: formatToCalendarDate(event.Event_Start),
    endDatetime: formatToCalendarDate(event.Event_END),
    timezone: "America/Chicago",
  };

  const AddToCalendarModal = AddToCalendarHOC(ATCWrapper, ATCDropdown);

  return (
    <div className="event-info">
      <Link to="/events" className="primary-text">
        <b>{"« All Events"}</b>
      </Link>
      <div className="event-title">
        <h2>{event.Event_Title}</h2>
      </div>
      <div>
        <div>
          {`${startDay} ${startDate} @ ${formatAMPM(
            event.Event_Start
          )} - ${endDay} ${endDate} @ ${formatAMPM(event.Event_END)}`}
        </div>
      </div>
      <div className="event-card">
        <div>
          <img
            src={`https://picsum.photos/${parseInt(0.8 * width)}/${parseInt(
              0.5 * height
            )}`}
            alt="event"
          />
        </div>
      </div>
      <div>{event.Event_Description}</div>
      <AddToCalendarModal
        event={calendarEvent}
        linkProps={{
          className: "atc-dropdown-title",
        }}
      />
      <hr />
      <div className="events-container">
        <div>
          <h6 className="primary-text">DETAILS</h6>
          <div className="event-info">
            <div className="secondary-text">Start:</div>
            <div>{`${startDay} ${startDate} @ ${formatAMPM(
              event.Event_Start
            )}`}</div>
          </div>
          <div className="event-info">
            <div className="secondary-text">End:</div>
            <div>{`${endDay} ${endDate} @ ${formatAMPM(event.Event_END)}`}</div>
          </div>
          <div className="event-info">
            <div className="secondary-text">Venue:</div>
            <div>{event.Event_Location}</div>
          </div>
        </div>
        <div>
          <h6 className="primary-text">ORGANIZER</h6>
          <div>{organizer.User_Name}</div>
          <div className="event-info">
            <div className="secondary-text">Phone:</div>
            <div>{organizer.User_Phone}</div>
          </div>
          <div className="event-info">
            <div className="secondary-text">Email:</div>
            <div>{organizer.User_Email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventInfo;
