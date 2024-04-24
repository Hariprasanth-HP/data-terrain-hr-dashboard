import React, { Fragment } from "react";
import "./MeetingInfo.css";
import MeetingCard from "./MeetingCard/MeetingCard";
const MeetingInfo = () => {
  return (
    <div className="meetingInfo-container">
      <p className="meetingInfo-title">Today Interviews Meetings Info</p>
      <hr />
      <div className="meetingInfo-card">
        {detailsArray.map((details, index) => {
          return (
            <Fragment key={index}>
              <MeetingCard details={details} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default MeetingInfo;
const detailsArray = [
  {
    level1: "7/10",
    level2: "6/10",
    level3: "Waiting",
    meetvia: "G-Meet",
    interviewer1: "Stella",
    interviewer2: "Smith",
    interviewer3: "Stevan",
    attendees: "Johnson",
    date: "19 th Feb 2024",
    time: "10:30 AM",
    name: "John Smith",
    role: "Python Developer",
  },
  {
    level1: "7/10",
    level2: "6/10",
    level3: "Waiting",
    meetvia: "G-Meet",
    interviewer1: "Stella",
    interviewer2: "Smith",
    interviewer3: "Stevan",
    attendees: "Johnson",
    date: "19 th Feb 2024",
    time: "10:30 AM",
    name: "John Doe",
    role: "Python Developer",
  },
  {
    level1: "7/10",
    level2: "6/10",
    level3: "Waiting",
    meetvia: "G-Meet",
    interviewer1: "Stella",
    interviewer2: "Smith",
    interviewer3: "Stevan",
    attendees: "Johnson",
    date: "19 th Feb 2024",
    time: "10:30 AM",
    name: "John Been",
    role: "Python Developer",
  },
];
