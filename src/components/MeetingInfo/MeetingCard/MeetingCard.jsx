import React from "react";
import "./MeetingCard.css";
import Button from "@mui/material/Button";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const MeetingCard = ({ details }) => {
  const {
    level1,
    level2,
    level3,
    meetvia,
    interviewer1,
    interviewer2,
    interviewer3,
    attendees,
    date,
    time,
    name,
    role,
  } = details;
  return (
    <div className="meetingCard-container">
      <div>
        <div className="meetingCard-profile">
          <img
            className="profile-img"
            style={{
              display: "flex",
              height: "103px",
              width: "103px",
            }}
            src={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
            alt="profile"
          />
          <p className="profile-img-name">{name}</p>
          <p className="profile-img-role">{role}</p>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            height: "18%",
          }}
        >
          <div className="meeting-card-calender ">
            <CalendarTodayIcon color="primary" />
            {date}
          </div>
          <hr />
          <div className="meeting-card-calender ">
            <AccessTimeIcon color="primary" />
            {time}
          </div>
        </div>
      </div>
      <hr />

      <div className="meetingCard-details">
        <div
          style={{
            display: "flex",
            height: "243px",
          }}
        >
          <ul class="no-bullets">
            <li className="meetingCard-list">
              <p className="meetingCard-details-content">
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  1st Level:
                </p>

                {level1}
              </p>
            </li>
            <hr />
            <li className="meetingCard-list">
              <p className="meetingCard-details-content">
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  2nd Level:
                </p>
                {level2}
              </p>
            </li>
            <hr />{" "}
            <li className="meetingCard-list">
              <p className="meetingCard-details-content">
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  3rd Level:
                </p>
                {level3}
              </p>
            </li>
            <hr />{" "}
            <li className="meetingCard-list">
              <p className="meetingCard-details-content">
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Meet Via
                </p>
                {meetvia}
              </p>
            </li>
            <hr />
          </ul>
          <hr />
          <ul class="no-bullets">
            <li className="meetingCard-list">
              <p className="meetingCard-details-content">
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Interviewer:
                </p>
                {interviewer1}
              </p>
            </li>
            <hr />
            <li className="meetingCard-list">
              <p className="meetingCard-details-content">
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Interviewer:
                </p>
                {interviewer2}
              </p>
            </li>
            <hr />{" "}
            <li className="meetingCard-list">
              <p className="meetingCard-details-content">
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Interviewer:
                </p>
                {interviewer3}
              </p>
            </li>
            <hr />{" "}
            <li className="meetingCard-list">
              <p className="meetingCard-details-content">
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Attendees:
                </p>
                {attendees}
              </p>
            </li>
            <hr />
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            height: "100%",
          }}
        >
          <Button className="meetingCard-button" variant="outlined">
            Reschedule meeting
          </Button>
          <Button className="meetingCard-button" variant="contained">
            Join meeting
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MeetingCard;
