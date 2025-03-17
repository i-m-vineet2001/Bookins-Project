import { Link } from "react-router-dom";
import { Search, MapPin, Calendar, Users, Star, ArrowRight } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent } from "../components/ui/card"
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Find the Best Hotel Deals
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Compare prices from all major booking sites and save up to 80% on your next hotel stay.
                </p>
              </div>
              <div className="w-full max-w-3xl mx-auto mt-8 p-4 md:p-6 bg-background rounded-xl shadow-lg">
                <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto_auto]">
                  <div className="flex items-center space-x-2 bg-muted rounded-md px-3 py-2">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Where are you going?"
                      className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <div className="flex items-center space-x-2 bg-muted rounded-md px-3 py-2">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Check-in - Check-out"
                      className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <div className="flex items-center space-x-2 bg-muted rounded-md px-3 py-2">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="2 adults"
                      className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <Button size="lg" className="w-full md:w-auto">
                    <Search className="mr-2 h-4 w-4" /> Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Popular Destinations</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore top destinations with the best hotel deals
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {[
                { name: "New York", image: "/placeholder.svg?height=300&width=400", hotels: 1243 },
                { name: "Paris", image: "/placeholder.svg?height=300&width=400", hotels: 986 },
                { name: "London", image: "/placeholder.svg?height=300&width=400", hotels: 1102 },
                { name: "Tokyo", image: "/placeholder.svg?height=300&width=400", hotels: 875 },
                { name: "Dubai", image: "/placeholder.svg?height=300&width=400", hotels: 763 },
                { name: "Rome", image: "/placeholder.svg?height=300&width=400", hotels: 654 },
              ].map((destination, index) => (
                <Link href="/hotels" key={index} className="group">
                  <Card className="overflow-hidden">
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">{destination.name}</h3>
                          <p className="text-sm text-muted-foreground">{destination.hotels} hotels</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Bookins</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We compare prices from hundreds of booking sites to help you find the best deal
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {[
                {
                  title: "Best Price Guarantee",
                  description: "We compare prices from all major booking sites to ensure you get the best deal.",
                },
                {
                  title: "No Booking Fees",
                  description: "We don't charge any booking fees, so you can save more on your hotel stays.",
                },
                {
                  title: "Millions of Reviews",
                  description: "Read genuine reviews from real travelers to make informed decisions.",
                },
              ].map((feature, index) => (
                <Card key={index} className="bg-background">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      {index === 0 ? (
                        <Star className="h-6 w-6 text-primary" />
                      ) : index === 1 ? (
                        <Users className="h-6 w-6 text-primary" />
                      ) : (
                        <MapPin className="h-6 w-6 text-primary" />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Top Deals</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Exclusive hotel deals you won't find anywhere else
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {[
                {
                  name: "Luxury Resort & Spa",
                  location: "Bali, Indonesia",
                  image: "/placeholder.svg?height=300&width=400",
                  price: 120,
                  rating: 4.8,
                },
                {
                  name: "Urban Boutique Hotel",
                  location: "New York, USA",
                  image: "/placeholder.svg?height=300&width=400",
                  price: 180,
                  rating: 4.6,
                },
                {
                  name: "Seaside Villa",
                  location: "Santorini, Greece",
                  image: "/placeholder.svg?height=300&width=400",
                  price: 210,
                  rating: 4.9,
                },
              ].map((hotel, index) => (
                <Link href="/hotels/1" key={index} className="group">
                  <Card className="overflow-hidden">
                    <div className="relative h-48 w-full overflow-hidden">
                      <div className="absolute top-2 right-2 z-10 bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium">
                        Save 25%
                      </div>
                      <img
                        src={hotel.image || "/placeholder.svg"}
                        alt={hotel.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold">{hotel.name}</h3>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                            <span className="text-sm font-medium">{hotel.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{hotel.location}</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div>
                            <span className="text-lg font-bold">${hotel.price}</span>
                            <span className="text-sm text-muted-foreground"> / night</span>
                          </div>
                          <Button variant="outline" size="sm">
                            View Deal
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/hotels">
                <Button>View All Deals</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Subscribe to Our Newsletter</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get exclusive deals and travel inspiration delivered straight to your inbox
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <form className="flex space-x-2">
                  <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our Terms and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row md:justify-between">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Bookins. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

