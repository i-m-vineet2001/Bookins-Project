import TravelSearch from "../components/TravelBookingSidebar ";
import LocalCalendar from "../components/GoogleCalender";
import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [travelEvents, setTravelEvents] = useState([]);
  const [bookingEvents, setBookingEvents] = useState([]);

  // Load dummy data (simulating fetched data)
  useEffect(() => {
    const dummyTravelData = [
      {
        id: 1,
        type: "train",
        title: "Express Train to City Center",
        location: "Central Station",
        start: new Date(2025, 2, 25, 9, 30),
        end: new Date(2025, 2, 25, 11, 0),
        desc: "Train journey to downtown",
      },
      {
        id: 2,
        type: "flight",
        title: "Flight to New York",
        location: "JFK Airport",
        start: new Date(2025, 2, 28, 15, 0),
        end: new Date(2025, 2, 28, 18, 0),
        desc: "Business trip to New York",
      },
    ];

    const dummyBookingData = [
      {
        id: 1,
        type: "hotel",
        title: "Grand Palace Hotel",
        location: "Beach",
        start: new Date(2025, 2, 18, 10, 0),
        end: new Date(2025, 2, 18, 11, 0),
        desc: "Your booking for a luxury suite",
      },
      {
        id: 2,
        type: "hotel",
        title: "Ocean View Resort",
        location: "Beachside",
        start: new Date(2025, 2, 20, 17, 0),
        end: new Date(2025, 2, 20, 18, 0),
        desc: "Your booking for two days",
      },
      {
        id: 3,
        type: "hotel",
        title: "Palm Grove Resort",
        location: "Sikkim",
        start: new Date(2025, 2, 22, 13, 0),
        end: new Date(2025, 2, 22, 14, 0),
        desc: "Relaxing getaway in the hills",
      },
    ];

    setTravelEvents(dummyTravelData);
    setBookingEvents(dummyBookingData);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex">
        {/* Sidebar with travel and hotel details */}
        <TravelSearch travelEvents={travelEvents} bookingEvents={bookingEvents} />

        {/* Calendar Section (combining travel & booking for display) */}
        <LocalCalendar sampleEvents={bookingEvents} />
      </div>
    </div>
  );
};

export default Search;
