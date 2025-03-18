import React, { useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog"; // ShadCN UI
import { Button } from "../components/ui/button"; // ShadCN UI
import { X } from "lucide-react";


const localizer = momentLocalizer(moment);

// Sample event data

const LocalCalendar = ({sampleEvents}) => {
  const [view, setView] = useState(Views.MONTH);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleClose = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="p-6 w-5xl mx-auto bg-white dark:bg-gray-900 rounded-lg">
      <h2 className="text-3xl font-semibold text-center mb-4 dark:text-white">
        📅 Booking's Calendar
      </h2>

      {/* Calendar */}
      <div className=" shadow-lg rounded-lg p-4  dark:bg-gray-800">
        <Calendar
          localizer={localizer}
          events={sampleEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 530 }}
          views={{ month: true, week: true, day: true }}
          view={view}
          date={currentDate}
          onView={setView}
          onNavigate={(newDate) => setCurrentDate(newDate)}
          onSelectEvent={handleSelectEvent} // Event click opens popup
          eventPropGetter={(event) => ({
            style: {
              backgroundColor: "#3b82f6",
              color: "white",
              borderRadius: "6px",
              padding: "5px",
            },
          })}
        />
      </div>

      <Dialog open={!!selectedEvent} onOpenChange={handleClose}>
        <DialogContent className="max-w-md sm:max-w-lg md:max-w-xl bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6">
          <DialogHeader>
            <div className="text-center uppercase text-lg font-semibold text-gray-900 dark:text-white">
              <DialogTitle>{selectedEvent?.title}</DialogTitle>
            </div>
          </DialogHeader>

          {/* Event Details */}
          <div className="mt-4 space-y-4 text-gray-700 dark:text-gray-300">
            <div className="flex items-center space-x-2">
              <span className="text-xl">📅</span>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Date:</strong> {moment(selectedEvent?.start).format("MMMM Do YYYY, h:mm A")}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl">🕒</span>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Duration:</strong> {moment(selectedEvent?.start).format("h:mm A")} - {moment(selectedEvent?.end).format("h:mm A")}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl">📝</span>
              <p className="text-gray-700 dark:text-gray-300">
                {selectedEvent?.desc || "No description available."}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex justify-end space-x-2">
            <Button onClick={handleClose} className="px-4 py-2 text-white bg-gray-700 hover:bg-gray-800 rounded-md">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LocalCalendar;
