import { Link } from "react-router-dom";
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Badge } from "../components/ui/badge"
import { Table, TableBody, TableCell, TableRow } from "../components/ui/table"
import {
  MapPin,
  Calendar,
  Users,
  Star,
  Check,
  ExternalLink,
  ArrowLeft,
  Heart,
  ThumbsUp,
  Info,
  Award,
  Shield,
} from "lucide-react"
import Navbar from "../components/Navbar";

export default function HotelDetailPage() {
  const hotel = {
    id: 1,
    name: "Luxury Resort & Spa",
    location: "Bali, Indonesia",
    description:
      "Experience luxury like never before at our 5-star resort nestled in the heart of Bali. Featuring stunning ocean views, private villas, and world-class amenities.",
    rating: 4.8,
    reviews: 246,
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Fitness Center",
      "Room Service",
      "Airport Shuttle",
      "Beachfront",
    ],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    rooms: [
      {
        type: "Deluxe Room",
        occupancy: "2 Adults",
        beds: "1 King Bed",
        size: "40 m²",
        view: "Ocean View",
        amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Bar", "Safe"],
      },
      {
        type: "Premium Suite",
        occupancy: "2 Adults, 2 Children",
        beds: "1 King Bed, 1 Sofa Bed",
        size: "65 m²",
        view: "Ocean View with Balcony",
        amenities: [
          "Free WiFi",
          "Air Conditioning",
          "Flat-screen TV",
          "Mini Bar",
          "Safe",
          "Bathtub",
          "Separate Living Area",
        ],
      },
      {
        type: "Villa",
        occupancy: "4 Adults",
        beds: "2 King Beds",
        size: "120 m²",
        view: "Private Pool and Garden",
        amenities: [
          "Free WiFi",
          "Air Conditioning",
          "Flat-screen TV",
          "Mini Bar",
          "Safe",
          "Private Pool",
          "Kitchen",
          "Dining Area",
        ],
      },
    ],
  }

  const bookingOptions = [
    {
      site: "Booking.com",
      price: 180,
      originalPrice: 240,
      discount: "25% OFF",
      perks: ["Free cancellation", "Breakfast included", "Pay at the property"],
      roomType: "Deluxe Room",
      guestRating: 4.7,
      bestValue: true,
    },
    {
      site: "Expedia",
      price: 195,
      originalPrice: 240,
      discount: "19% OFF",
      perks: ["Free cancellation", "Pay at the property", "Loyalty points"],
      roomType: "Deluxe Room",
      guestRating: 4.5,
      bestValue: false,
    },
    {
      site: "Hotels.com",
      price: 210,
      originalPrice: 240,
      discount: "13% OFF",
      perks: ["Collect 1 stamp", "Member price", "Breakfast available"],
      roomType: "Deluxe Room",
      guestRating: 4.6,
      bestValue: false,
    },
    {
      site: "Agoda",
      price: 215,
      originalPrice: 240,
      discount: "10% OFF",
      perks: ["Free cancellation", "Pay at the property"],
      roomType: "Deluxe Room",
      guestRating: 4.4,
      bestValue: false,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 py-6 md:py-8">
          <Link href="/hotels" className="inline-flex items-center text-sm font-medium mb-4 hover:underline">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to search results
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold">{hotel.name}</h1>
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Add to favorites</span>
                  </Button>
                </div>
                <div className="flex items-center mt-2 space-x-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-muted-foreground">{hotel.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{hotel.rating}</span>
                    <span className="text-muted-foreground ml-1">({hotel.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-2">
                  <img
                    src={hotel.images[0] || "/placeholder.svg"}
                    alt={hotel.name}
                    width={800}
                    height={500}
                    className="rounded-lg object-cover w-full h-[300px]"
                  />
                </div>
                {hotel.images.slice(1, 5).map((image, index) => (
                  <img
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`${hotel.name} ${index + 1}`}
                    width={400}
                    height={250}
                    className="rounded-lg object-cover w-full h-[150px]"
                  />
                ))}
              </div>

              <Tabs defaultValue="overview">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="rooms">Rooms</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-4">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">About this property</h2>
                    <p className="text-muted-foreground">{hotel.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <Card>
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-2 flex items-center">
                            <Award className="h-5 w-5 mr-2 text-primary" />
                            Property Highlights
                          </h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                              <span>Perfect location with 9.2/10 rating from guests</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                              <span>Breakfast included with most bookings</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                              <span>Free airport shuttle service</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-2 flex items-center">
                            <Shield className="h-5 w-5 mr-2 text-primary" />
                            Good to Know
                          </h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                              <span>Free cancellation available with most rates</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                              <span>Enhanced cleaning protocols in place</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                              <span>Check-in: 2:00 PM, Check-out: 12:00 PM</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="rooms" className="mt-4">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Available Room Types</h2>
                    <div className="space-y-4">
                      {hotel.rooms.map((room, index) => (
                        <Card key={index}>
                          <CardContent className="p-0">
                            <div className="flex flex-col md:flex-row">
                              <div className="md:w-1/3 p-4">
                                <img
                                  src="/placeholder.svg?height=200&width=300"
                                  alt={room.type}
                                  width={300}
                                  height={200}
                                  className="rounded-lg object-cover w-full h-[150px]"
                                />
                              </div>
                              <div className="md:w-2/3 p-4">
                                <h3 className="font-semibold text-lg">{room.type}</h3>
                                <div className="grid grid-cols-2 gap-2 mt-2">
                                  <div className="flex items-center text-sm">
                                    <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                                    {room.occupancy}
                                  </div>
                                  <div className="flex items-center text-sm">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="mr-2 text-muted-foreground"
                                    >
                                      <path d="M2 4v16" />
                                      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
                                      <path d="M2 17h20" />
                                      <path d="M6 8v9" />
                                    </svg>
                                    {room.beds}
                                  </div>
                                  <div className="flex items-center text-sm">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="mr-2 text-muted-foreground"
                                    >
                                      <rect width="18" height="18" x="3" y="3" rx="2" />
                                      <path d="M3 9h18" />
                                      <path d="M9 21V9" />
                                    </svg>
                                    {room.size}
                                  </div>
                                  <div className="flex items-center text-sm">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="mr-2 text-muted-foreground"
                                    >
                                      <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7H2Z" />
                                      <path d="M6 11V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4" />
                                    </svg>
                                    {room.view}
                                  </div>
                                </div>
                                <div className="flex flex-wrap gap-1 mt-3">
                                  {room.amenities.map((amenity, i) => (
                                    <Badge key={i} variant="outline" className="text-xs font-normal">
                                      {amenity}
                                    </Badge>
                                  ))}
                                </div>
                                <div className="mt-4 flex justify-between items-center">
                                  <div>
                                    <span className="text-lg font-bold">$180</span>
                                    <span className="text-sm text-muted-foreground line-through ml-1">$240</span>
                                    <span className="text-sm text-muted-foreground"> / night</span>
                                  </div>
                                  <Link href={`/hotels/${hotel.id}/booking?room=${room.type}`}>
                                    <Button>Select Room</Button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="amenities" className="mt-4">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Property amenities</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {hotel.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-4 w-4 mr-2 text-primary" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="reviews" className="mt-4">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Guest reviews</h2>
                    <div className="flex items-center space-x-2">
                      <div className="bg-primary text-primary-foreground px-2 py-1 rounded font-medium">
                        {hotel.rating}
                      </div>
                      <span className="font-medium">Excellent</span>
                      <span className="text-muted-foreground">({hotel.reviews} reviews)</span>
                    </div>
                    <div className="space-y-4 mt-4">
                      {[
                        {
                          name: "Sarah J.",
                          date: "2 weeks ago",
                          rating: 5,
                          comment:
                            "Absolutely stunning resort with impeccable service. The staff went above and beyond to make our stay memorable. The ocean view from our room was breathtaking, and the spa treatments were divine. Will definitely return!",
                        },
                        {
                          name: "Michael T.",
                          date: "1 month ago",
                          rating: 4,
                          comment:
                            "Beautiful property with excellent amenities. The pools are amazing and the beach access is convenient. Rooms are spacious and well-appointed. Only downside was the restaurant prices were a bit steep, but the food quality was excellent.",
                        },
                        {
                          name: "Lisa R.",
                          date: "2 months ago",
                          rating: 5,
                          comment:
                            "Perfect honeymoon destination! The private villa with pool was worth every penny. Complete privacy, stunning views, and the most attentive staff. The included breakfast was extensive and delicious. Highly recommend for special occasions.",
                        },
                      ].map((review, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                  {review.name.charAt(0)}
                                </div>
                                <div>
                                  <h4 className="font-medium">{review.name}</h4>
                                  <p className="text-sm text-muted-foreground">{review.date}</p>
                                </div>
                              </div>
                              <div className="flex items-center">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                                {Array.from({ length: 5 - review.rating }).map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-muted-foreground" />
                                ))}
                              </div>
                            </div>
                            <p className="mt-3 text-sm">{review.comment}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      View All {hotel.reviews} Reviews
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Price comparison</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Mar 15 - Mar 20, 2025</span>
                      <span>•</span>
                      <Users className="h-4 w-4" />
                      <span>2 adults</span>
                    </div>

                    <div className="space-y-3">
                      {bookingOptions.map((option, index) => (
                        <div
                          key={index}
                          className={`border rounded-lg p-4 ${option.bestValue ? "border-primary bg-primary/5" : ""}`}
                        >
                          {option.bestValue && (
                            <div className="flex items-center text-primary text-sm font-medium mb-2">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              Best Value
                            </div>
                          )}
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{option.site}</span>
                            {option.discount && (
                              <Badge
                                variant="outline"
                                className={option.bestValue ? "text-primary border-primary" : ""}
                              >
                                {option.discount}
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-baseline space-x-2 mb-2">
                            <span className="text-2xl font-bold">${option.price}</span>
                            {option.originalPrice && (
                              <span className="text-muted-foreground line-through">${option.originalPrice}</span>
                            )}
                            <span className="text-sm text-muted-foreground">per night</span>
                          </div>
                          <div className="space-y-1 mb-3">
                            {option.perks.map((perk, i) => (
                              <div key={i} className="flex items-center text-sm text-muted-foreground">
                                <Check className="h-4 w-4 mr-1 text-green-500" />
                                <span>{perk}</span>
                              </div>
                            ))}
                          </div>
                          <Link href={`/hotels/${hotel.id}/booking?provider=${option.site}`}>
                            <Button
                              className="w-full flex items-center justify-center"
                              variant={option.bestValue ? "default" : "outline"}
                            >
                              View Deal <ExternalLink className="ml-1 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Price History</h2>
                  <div className="h-[150px] flex items-center justify-center border rounded-md">
                    <p className="text-sm text-muted-foreground">Price chart will be displayed here</p>
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <p>Current price is 15% lower than the average price over the last 30 days.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Price Breakdown</h2>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="py-2">5 nights</TableCell>
                        <TableCell className="text-right py-2">$900</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="py-2">Taxes and fees</TableCell>
                        <TableCell className="text-right py-2">$108</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="py-2">Resort fee</TableCell>
                        <TableCell className="text-right py-2">$50</TableCell>
                      </TableRow>
                      <TableRow className="font-medium">
                        <TableCell className="py-2">Total</TableCell>
                        <TableCell className="text-right py-2">$1,058</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="mt-4 text-sm flex items-start">
                    <Info className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      Some properties require payment of local taxes and fees upon arrival.
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Need help?</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our travel experts are here to help you book the perfect hotel.
                  </p>
                  <Button variant="outline" className="w-full">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
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

