import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/images/homeImage.jpg')] bg-cover bg-center bg-no-repeat flex items-center text-center">
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center">
            <div className="space-y-4 drop-shadow-2xl">
              <h1
                className="text-3xl font-bold text-violet-50 sm:text-4xl md:text-5xl lg:text-6xl"
                style={{ textShadow: "2px 2px 4px black" }}
              >
                Find the Best Hotel Deals
              </h1>
              <p
                className="mx-auto max-w-[700px] text-gray-200 md:text-xl"
                style={{ textShadow: "2px 1px 1px black" }}
              >
                Compare prices from all major booking sites and save up to 80%
                on your next hotel stay.
              </p>
            </div>
            <div className="w-full max-w-3xl mx-auto mt-8 p-4 md:p-6 bg-white bg-opacity-80 rounded-xl shadow-lg">
              <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto_auto]">
                <div className="flex items-center space-x-2 bg-gray-100 rounded-md px-3 py-2">
                  <MapPin className="h-5 w-5 text-gray-600" />
                  <Input
                    type="text"
                    placeholder="Where are you going?"
                    className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <div className="flex items-center space-x-2 bg-gray-100 rounded-md px-3 py-2">
                  <Calendar className="h-5 w-5 text-gray-600" />
                  <Input
                    type="text"
                    placeholder="Check-in - Check-out"
                    className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <div className="flex items-center space-x-2 bg-gray-100 rounded-md px-3 py-2">
                  <Users className="h-5 w-5 text-gray-600" />
                  <Input
                    type="text"
                    placeholder="2 adults"
                    className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Search className="mr-2 h-4 w-4" /> Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
              Popular Destinations
            </h2>
            <p className="max-w-[900px] text-gray-700 md:text-xl">
              Explore top destinations with the best hotel deals
            </p>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {[
                {
                  name: "New York",
                  image: "/images/newyork.jpg",
                  hotels: 1243,
                },
                { name: "Paris", image: "/images/paris.jpg", hotels: 986 },
                { name: "London", image: "/images/london.jpg", hotels: 1102 },
                { name: "Tokyo", image: "/images/tokyo.jpg", hotels: 1102 },
                { name: "Italy", image: "/images/italy.jpg", hotels: 1102 },
                { name: "Dubai", image: "/images/dubai.jpg", hotels: 1102 },
              ].map((destination, index) => (
                <Link to="/hotels" key={index} className="group">
                  <Card className="overflow-hidden">
                    <div className="relative h-48 w-full">
                      <img
                        className="absolute inset-0 w-full h-full object-cover"
                        src={destination.image}
                        alt={destination.name}
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {destination.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {destination.hotels} hotels
                          </p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-blue-600 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex flex-col items-center text-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
              Why Choose Us
            </h2>
            <p className="max-w-[900px] text-gray-700 md:text-xl">
              We compare prices from hundreds of booking sites to help you find
              the best deal
            </p>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {[
                {
                  title: "Best Price Guarantee",
                  icon: <Star className="h-6 w-6 text-blue-600" />,
                },
                {
                  title: "No Booking Fees",
                  icon: <Users className="h-6 w-6 text-blue-600" />,
                },
                {
                  title: "Millions of Reviews",
                  icon: <MapPin className="h-6 w-6 text-blue-600" />,
                },
              ].map((feature, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      We ensure you get the best deals with no hidden fees.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
