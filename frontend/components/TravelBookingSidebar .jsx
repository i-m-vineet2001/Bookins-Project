import { useState } from "react";
import { Search, X } from "lucide-react";

const TravelBookingSidebar = ({ travelEvents = [], bookingEvents = [] }) => {
  const [activeTab, setActiveTab] = useState("travels"); // "travels" or "bookings"
  const [searchQuery, setSearchQuery] = useState("");

  // Filter events based on search
  const filteredEvents =
    activeTab === "travels"
      ? travelEvents.filter((event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : bookingEvents.filter((event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <div className="w-80 h-auto p-5 bg-white shadow-lg border border-gray-200 flex flex-col">
      {/* Search Bar */}
      <div className="relative mb-5">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
        <input
          type="text" 
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {searchQuery && (
          <X
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            size={18}
            onClick={() => setSearchQuery("")}
          />
        )}
      </div>

      {/* Toggle Buttons */}
      <div className="flex bg-gray-100 p-1 rounded-lg mb-5">
        {["travels", "bookings"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-1/2 py-2 text-center text-sm font-medium rounded-lg transition-all ${
              activeTab === tab ? "bg-blue-500 text-white shadow-md" : "text-gray-700"
            }`}
          >
            {tab === "travels" ? "🚆 Travels" : "🏨 Bookings"}
          </button>
        ))}
      </div>

      {/* Event List */}
      <div className="space-y-3">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div
              key={event.id}
              className="p-3 bg-gray-100 rounded-lg border border-gray-300"
            >
              <h4 className="font-semibold text-gray-900">{event.title}</h4>
              <p className="text-gray-600">{event.location}</p>
              <p className="text-gray-500">{event.start.toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default TravelBookingSidebar;
