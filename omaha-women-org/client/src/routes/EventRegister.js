import React from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import EventInfo from "../Components/EventInfo";
import { eventRegistrationURL } from "../Constants/AppLinks";

function EventRegistrationContainer({ user }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { event } = location.state;

  const registerEvent = (e) => {
    e.preventDefault();
    if (!user) {
      toast.info("Login or Register yourself to continue!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      navigate("/login");
    } else {
      const data = {
        userId: user.User_Id,
        eventId: event.Event_Id,
      };
      fetch(eventRegistrationURL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message === "Success") {
            toast.success("Registration Successful !", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          } else {
            toast.info("You have already registered for this event !", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          }
        })
        .catch((err) => {
          toast.error("Failed to register !", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        });
    }
  };

  if(!event) return null;

  return (
    <div className="container">
      <EventInfo event={event} />
      <hr />
      <div className="event-info">
        <h6 className="primary-text">RSVP Now</h6>
        <div>
          <button className="btn btn-primary m-3" onClick={registerEvent}>
            Going
          </button>
          <Link to="/events">can't go</Link>
        </div>
      </div>
    </div>
  );
}

export default EventRegistrationContainer;
