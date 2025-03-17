import React, { useEffect, useState } from "react";
import ApiCalendar from "react-google-calendar-api";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const config = {
  clientId: import.meta.env.VITE_CLIENT_ID,
  apiKey: import.meta.env.VITE_API_KEY,
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

const apiCalendar = new ApiCalendar(config);
const localizer = momentLocalizer(moment);

const GoogleCalendar = () => {
  const [events, setEvents] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    // Check if the user is already signed in
    const checkAuth = () => {
      if (apiCalendar.sign) {
        setIsSignedIn(true);
        fetchCalendarEvents();
      }
    };

    // Listen for sign-in status changes
    apiCalendar.onLoad(() => {
      checkAuth();
    });

    // Cleanup
    return () => {
      apiCalendar.listenSign = false;
    };
  }, []);

  const handleSignIn = () => {
    apiCalendar.handleAuthClick()
      .then(() => {
        setIsSignedIn(true);
        fetchCalendarEvents();
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  };

  const fetchCalendarEvents = async () => {
    try {
      const response = await apiCalendar.listUpcomingEvents(20);
      const formattedEvents = response.result.items.map((event) => ({
        id: event.id,
        title: event.summary,
        start: new Date(event.start.dateTime || event.start.date),
        end: new Date(event.end.dateTime || event.end.date),
      }));
      setEvents(formattedEvents);
    } catch (error) {
      console.error("Error fetching calendar events:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Google Calendar</h2>
      {!isSignedIn ? (
        <button
          onClick={handleSignIn}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sign in with Google
        </button>
      ) : (
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      )}
    </div>
  );
};

export default GoogleCalendar;