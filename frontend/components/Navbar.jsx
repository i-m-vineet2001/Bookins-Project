import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button"; // Ensure correct import

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img className="w-[5rem]" src="/bookins.svg" alt="" />
          <span className="text-xl font-bold">Bookins</span>
        </Link>

        {/* Navigation Links (Hidden on Small Screens) */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-sm font-medium hover:underline">
            Home
          </Link>
          <Link to="/hotels" className="text-sm font-medium hover:underline">
            Hotels
          </Link>
          <Link to="/about" className="text-sm font-medium hover:underline">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:underline">
            Contact
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" size="sm">
              Log in
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="sm">Sign up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
