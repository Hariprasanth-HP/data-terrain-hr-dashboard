import React, { useEffect, useState } from "react";
import "./MeetingInfo.css";
import MeetingCard from "./MeetingCard/MeetingCard";

const MeetingInfo = () => {
  const [detailsArray, setDetailsArray] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setDetailsArray(data.details);
        console.log(data);
      });
  }, []);
  return (
    <div className="meetingInfo-container">
      <p className="meetingInfo-title">Today Interviews Meetings Info</p>
      <hr />
      <div className="meetingInfo-card">
        {detailsArray.length === 0 ? (
          <p>loading</p>
        ) : (
          <>
            {detailsArray.map((details, index) => {
              return (
                <div key={index}>
                  <MeetingCard details={details} />
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default MeetingInfo;
