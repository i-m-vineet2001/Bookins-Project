import { Link } from "react-router-dom";
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent } from "../components/ui/card"
import { Slider } from "../components/ui/slider"
import { Checkbox } from "../components/ui/checkbox"
import { Badge } from "../components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Calendar } from "../components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover"
import { MapPin, CalendarIcon, Users, Star, Search, Filter, Heart } from "lucide-react"
import Navbar from "../components/Navbar";

export default function HotelsPage() {
    const hotels = [
        {
            id: 1,
            name: "Luxury Resort & Spa",
            location: "Bali, Indonesia",
            image: "/placeholder.svg?height=300&width=400",
            price: 180,
            originalPrice: 240,
            discount: "25% OFF",
            rating: 4.8,
            reviews: 246,
            amenities: ["Free WiFi", "Swimming Pool", "Spa", "Restaurant"],
            bestDeal: "Booking.com",
        },
        {
            id: 2,
            name: "Urban Boutique Hotel",
            location: "New York, USA",
            image: "/placeholder.svg?height=300&width=400",
            price: 195,
            originalPrice: 240,
            discount: "19% OFF",
            rating: 4.6,
            reviews: 189,
            amenities: ["Free WiFi", "Fitness Center", "Bar", "Room Service"],
            bestDeal: "Expedia",
        },
        {
            id: 3,
            name: "Seaside Villa",
            location: "Santorini, Greece",
            image: "/placeholder.svg?height=300&width=400",
            price: 210,
            originalPrice: 240,
            discount: "13% OFF",
            rating: 4.9,
            reviews: 312,
            amenities: ["Free WiFi", "Private Pool", "Sea View", "Kitchen"],
            bestDeal: "Hotels.com",
        },
        {
            id: 4,
            name: "Mountain Lodge",
            location: "Aspen, USA",
            image: "/placeholder.svg?height=300&width=400",
            price: 160,
            originalPrice: 200,
            discount: "20% OFF",
            rating: 4.5,
            reviews: 178,
            amenities: ["Free WiFi", "Ski Access", "Fireplace", "Restaurant"],
            bestDeal: "Booking.com",
        },
        {
            id: 5,
            name: "City Center Hotel",
            location: "London, UK",
            image: "/placeholder.svg?height=300&width=400",
            price: 145,
            originalPrice: 170,
            discount: "15% OFF",
            rating: 4.4,
            reviews: 203,
            amenities: ["Free WiFi", "Restaurant", "Bar", "Fitness Center"],
            bestDeal: "Expedia",
        },
        {
            id: 6,
            name: "Beachfront Resort",
            location: "Cancun, Mexico",
            image: "/placeholder.svg?height=300&width=400",
            price: 220,
            originalPrice: 275,
            discount: "20% OFF",
            rating: 4.7,
            reviews: 267,
            amenities: ["Free WiFi", "Swimming Pool", "Beach Access", "Spa"],
            bestDeal: "Hotels.com",
        },
        {
            id: 7,
            name: "Historic Inn",
            location: "Rome, Italy",
            image: "/placeholder.svg?height=300&width=400",
            price: 175,
            originalPrice: 195,
            discount: "10% OFF",
            rating: 4.5,
            reviews: 156,
            amenities: ["Free WiFi", "Restaurant", "Bar", "Historic Building"],
            bestDeal: "Booking.com",
        },
        {
            id: 8,
            name: "Modern Loft",
            location: "Tokyo, Japan",
            image: "/placeholder.svg?height=300&width=400",
            price: 190,
            originalPrice: 220,
            discount: "14% OFF",
            rating: 4.6,
            reviews: 142,
            amenities: ["Free WiFi", "City View", "Kitchen", "Workspace"],
            bestDeal: "Expedia",
        },
        {
            id: 9,
            name: "Tropical Paradise Resort",
            location: "Phuket, Thailand",
            image: "/placeholder.svg?height=300&width=400",
            price: 165,
            originalPrice: 200,
            discount: "18% OFF",
            rating: 4.7,
            reviews: 231,
            amenities: ["Free WiFi", "Swimming Pool", "Beach Access", "Spa"],
            bestDeal: "Hotels.com",
        },
        {
            id: 10,
            name: "Alpine Chalet",
            location: "Swiss Alps, Switzerland",
            image: "/placeholder.svg?height=300&width=400",
            price: 230,
            originalPrice: 280,
            discount: "18% OFF",
            rating: 4.8,
            reviews: 187,
            amenities: ["Free WiFi", "Mountain View", "Fireplace", "Sauna"],
            bestDeal: "Booking.com",
        },
        {
            id: 11,
            name: "Desert Oasis Resort",
            location: "Dubai, UAE",
            image: "/placeholder.svg?height=300&width=400",
            price: 250,
            originalPrice: 320,
            discount: "22% OFF",
            rating: 4.9,
            reviews: 276,
            amenities: ["Free WiFi", "Swimming Pool", "Spa", "Desert Tours"],
            bestDeal: "Expedia",
        },
        {
            id: 12,
            name: "Lakeside Retreat",
            location: "Lake Como, Italy",
            image: "/placeholder.svg?height=300&width=400",
            price: 205,
            originalPrice: 240,
            discount: "15% OFF",
            rating: 4.7,
            reviews: 198,
            amenities: ["Free WiFi", "Lake View", "Restaurant", "Boat Rental"],
            bestDeal: "Hotels.com",
        },
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1">
                <div className="container px-4 py-6 md:py-8">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Filters Sidebar */}
                        <div className="w-full md:w-64 lg:w-72 shrink-0">
                            <div className="sticky top-24 space-y-6">
                                <div className="bg-background rounded-lg border p-4 space-y-4">
                                    <h3 className="font-medium text-lg">Search</h3>
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label htmlFor="destination" className="text-sm font-medium">
                                                Destination
                                            </label>
                                            <div className="relative">
                                                <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                                <Input id="destination" placeholder="Where are you going?" className="pl-8" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="dates" className="text-sm font-medium">
                                                Check-in / Check-out
                                            </label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        <span>Pick a date</span>
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar mode="range" initialFocus />
                                                </PopoverContent>
                                            </Popover>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="guests" className="text-sm font-medium">
                                                Guests
                                            </label>
                                            <div className="relative">
                                                <Users className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                                <Select>
                                                    <SelectTrigger className="pl-8">
                                                        <SelectValue placeholder="Number of guests" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="1">1 Guest</SelectItem>
                                                        <SelectItem value="2">2 Guests</SelectItem>
                                                        <SelectItem value="3">3 Guests</SelectItem>
                                                        <SelectItem value="4">4 Guests</SelectItem>
                                                        <SelectItem value="5">5+ Guests</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <Button className="w-full">
                                            <Search className="mr-2 h-4 w-4" />
                                            Search
                                        </Button>
                                    </div>
                                </div>

                                <div className="bg-background rounded-lg border p-4 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-medium text-lg">Filters</h3>
                                        <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                                            Reset All
                                        </Button>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Price Range</label>
                                            <div className="space-y-4">
                                                <Slider defaultValue={[50, 250]} min={0} max={500} step={10} />
                                                <div className="flex items-center justify-between text-sm">
                                                    <span>$50</span>
                                                    <span>$250</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Star Rating</label>
                                            <div className="space-y-2">
                                                {[5, 4, 3, 2, 1].map((rating) => (
                                                    <div key={rating} className="flex items-center space-x-2">
                                                        <Checkbox id={`rating-${rating}`} />
                                                        <label
                                                            htmlFor={`rating-${rating}`}
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                                                        >
                                                            {Array.from({ length: rating }).map((_, i) => (
                                                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                            ))}
                                                            {Array.from({ length: 5 - rating }).map((_, i) => (
                                                                <Star key={i} className="h-4 w-4 text-muted-foreground" />
                                                            ))}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Property Type</label>
                                            <div className="space-y-2">
                                                {["Hotel", "Resort", "Villa", "Apartment", "Hostel"].map((type) => (
                                                    <div key={type} className="flex items-center space-x-2">
                                                        <Checkbox id={`type-${type}`} />
                                                        <label
                                                            htmlFor={`type-${type}`}
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {type}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Amenities</label>
                                            <div className="space-y-2">
                                                {[
                                                    "Free WiFi",
                                                    "Swimming Pool",
                                                    "Spa",
                                                    "Fitness Center",
                                                    "Restaurant",
                                                    "Room Service",
                                                    "Airport Shuttle",
                                                    "Free Parking",
                                                ].map((amenity) => (
                                                    <div key={amenity} className="flex items-center space-x-2">
                                                        <Checkbox id={`amenity-${amenity}`} />
                                                        <label
                                                            htmlFor={`amenity-${amenity}`}
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {amenity}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <Button className="w-full">
                                            <Filter className="mr-2 h-4 w-4" />
                                            Apply Filters
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 space-y-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div>
                                    <h1 className="text-2xl font-bold">Hotels in All Destinations</h1>
                                    <p className="text-muted-foreground">Showing {hotels.length} hotels with the best deals</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Select defaultValue="recommended">
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Sort by" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="recommended">Recommended</SelectItem>
                                            <SelectItem value="price-low">Price: Low to High</SelectItem>
                                            <SelectItem value="price-high">Price: High to Low</SelectItem>
                                            <SelectItem value="rating">Rating</SelectItem>
                                            <SelectItem value="discount">Biggest Discount</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Tabs defaultValue="grid">
                                        <TabsList className="grid w-16 grid-cols-2">
                                            <TabsTrigger value="grid" className="px-2">
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
                                                >
                                                    <rect width="7" height="7" x="3" y="3" rx="1" />
                                                    <rect width="7" height="7" x="14" y="3" rx="1" />
                                                    <rect width="7" height="7" x="14" y="14" rx="1" />
                                                    <rect width="7" height="7" x="3" y="14" rx="1" />
                                                </svg>
                                                <span className="sr-only">Grid view</span>
                                            </TabsTrigger>
                                            <TabsTrigger value="list" className="px-2">
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
                                                >
                                                    <line x1="3" x2="21" y1="6" y2="6" />
                                                    <line x1="3" x2="21" y1="12" y2="12" />
                                                    <line x1="3" x2="21" y1="18" y2="18" />
                                                </svg>
                                                <span className="sr-only">List view</span>
                                            </TabsTrigger>
                                        </TabsList>
                                    </Tabs>
                                </div>
                            </div>

                            <Tabs defaultValue="grid" className="space-y-4">
                                <TabsContent value="grid" className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {hotels.map((hotel) => (
                                            <Link to={`/hotels/${hotel.id}`} key={hotel.id} className="group">
                                                <Card className="overflow-hidden h-full">
                                                    <div className="relative">
                                                        <img
                                                            src={hotel.image || "/placeholder.svg"}
                                                            alt={hotel.name}
                                                            width={400}
                                                            height={200}
                                                            className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                                                        />
                                                        <div className="absolute top-2 right-2 z-10 bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium">
                                                            {hotel.discount}
                                                        </div>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="absolute top-2 left-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white/90"
                                                        >
                                                            <Heart className="h-4 w-4" />
                                                            <span className="sr-only">Add to favorites</span>
                                                        </Button>
                                                        <div className="absolute bottom-2 left-2 z-10 bg-black/60 text-white px-2 py-1 rounded text-xs">
                                                            Best deal on {hotel.bestDeal}
                                                        </div>
                                                    </div>
                                                    <CardContent className="p-4">
                                                        <div className="flex flex-col space-y-2">
                                                            <div className="flex items-center justify-between">
                                                                <h3 className="font-semibold truncate">{hotel.name}</h3>
                                                                <div className="flex items-center">
                                                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                                                                    <span className="text-sm font-medium">{hotel.rating}</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center text-muted-foreground">
                                                                <MapPin className="h-4 w-4 mr-1" />
                                                                <span className="text-sm">{hotel.location}</span>
                                                            </div>
                                                            <div className="flex flex-wrap gap-1 mt-1">
                                                                {hotel.amenities.slice(0, 3).map((amenity, index) => (
                                                                    <Badge key={index} variant="outline" className="text-xs font-normal">
                                                                        {amenity}
                                                                    </Badge>
                                                                ))}
                                                                {hotel.amenities.length > 3 && (
                                                                    <Badge variant="outline" className="text-xs font-normal">
                                                                        +{hotel.amenities.length - 3} more
                                                                    </Badge>
                                                                )}
                                                            </div>
                                                            <div className="flex items-center justify-between mt-2">
                                                                <div>
                                                                    <span className="text-lg font-bold">${hotel.price}</span>
                                                                    <span className="text-sm text-muted-foreground line-through ml-1">
                                                                        ${hotel.originalPrice}
                                                                    </span>
                                                                    <span className="text-sm text-muted-foreground"> / night</span>
                                                                </div>
                                                                <Button
                                                                    variant="outline"
                                                                    size="sm"
                                                                    className="group-hover:bg-primary group-hover:text-primary-foreground"
                                                                >
                                                                    View Deal
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </Link>
                                        ))}
                                    </div>
                                </TabsContent>

                                <TabsContent value="list" className="space-y-4">
                                    <div className="space-y-4">
                                        {hotels.map((hotel) => (
                                            <Link to={`/hotels/${hotel.id}`} key={hotel.id} className="group">
                                                <Card className="overflow-hidden">
                                                    <div className="flex flex-col md:flex-row">
                                                        <div className="relative md:w-1/3">
                                                            <img
                                                                src={hotel.image || "/placeholder.svg"}
                                                                alt={hotel.name}
                                                                width={400}
                                                                height={200}
                                                                className="h-48 md:h-full w-full object-cover transition-transform group-hover:scale-105"
                                                            />
                                                            <div className="absolute top-2 right-2 z-10 bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium">
                                                                {hotel.discount}
                                                            </div>
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                className="absolute top-2 left-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white/90"
                                                            >
                                                                <Heart className="h-4 w-4" />
                                                                <span className="sr-only">Add to favorites</span>
                                                            </Button>
                                                            <div className="absolute bottom-2 left-2 z-10 bg-black/60 text-white px-2 py-1 rounded text-xs">
                                                                Best deal on {hotel.bestDeal}
                                                            </div>
                                                        </div>
                                                        <CardContent className="p-4 md:w-2/3 flex flex-col justify-between">
                                                            <div className="space-y-2">
                                                                <div className="flex items-center justify-between">
                                                                    <h3 className="font-semibold text-lg">{hotel.name}</h3>
                                                                    <div className="flex items-center">
                                                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                                                                        <span className="text-sm font-medium">{hotel.rating}</span>
                                                                        <span className="text-sm text-muted-foreground ml-1">
                                                                            ({hotel.reviews} reviews)
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-center text-muted-foreground">
                                                                    <MapPin className="h-4 w-4 mr-1" />
                                                                    <span className="text-sm">{hotel.location}</span>
                                                                </div>
                                                                <div className="flex flex-wrap gap-1 mt-1">
                                                                    {hotel.amenities.map((amenity, index) => (
                                                                        <Badge key={index} variant="outline" className="text-xs font-normal">
                                                                            {amenity}
                                                                        </Badge>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center justify-between mt-4">
                                                                <div>
                                                                    <span className="text-lg font-bold">${hotel.price}</span>
                                                                    <span className="text-sm text-muted-foreground line-through ml-1">
                                                                        ${hotel.originalPrice}
                                                                    </span>
                                                                    <span className="text-sm text-muted-foreground"> / night</span>
                                                                </div>
                                                                <Button
                                                                    variant="outline"
                                                                    className="group-hover:bg-primary group-hover:text-primary-foreground"
                                                                >
                                                                    View Deal
                                                                </Button>
                                                            </div>
                                                        </CardContent>
                                                    </div>
                                                </Card>
                                            </Link>
                                        ))}
                                    </div>
                                </TabsContent>
                            </Tabs>

                            <div className="flex items-center justify-center space-x-2">
                                <Button variant="outline" size="icon" disabled>
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
                                    >
                                        <path d="m15 18-6-6 6-6" />
                                    </svg>
                                    <span className="sr-only">Previous page</span>
                                </Button>
                                <Button variant="outline" size="sm" className="h-8 w-8">
                                    1
                                </Button>
                                <Button variant="outline" size="sm" className="h-8 w-8">
                                    2
                                </Button>
                                <Button variant="outline" size="sm" className="h-8 w-8">
                                    3
                                </Button>
                                <span>...</span>
                                <Button variant="outline" size="sm" className="h-8 w-8">
                                    8
                                </Button>
                                <Button variant="outline" size="icon">
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
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                    <span className="sr-only">Next page</span>
                                </Button>
                            </div>
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

