import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignupPage from "../pages/Signup";
import LoginPage from "../pages/Login";
import HotelDetailPage from "../pages/HotelDetail";
import BookingPage from "../pages/Booking";
import HotelsPage from "../pages/Hotel";
import UserBookingsPage from "../pages/UserBooking";
import Search from "../pages/Search";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/hotels/:id" element={<HotelDetailPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/userbooking" element={<UserBookingsPage />} />
          <Route path="/booking" element={<BookingPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}