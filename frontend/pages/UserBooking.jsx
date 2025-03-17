import { Link } from "react-router-dom";
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Badge } from "../components/ui/badge"
import { Input } from "../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Calendar, Download, Eye, Filter, MapPin } from "lucide-react"
import Navbar from "../components/Navbar";

export default function UserBookingsPage() {
    const bookings = [
        {
            id: "BK-12345678",
            hotel: "Luxury Resort & Spa",
            location: "Bali, Indonesia",
            image: "/placeholder.svg?height=100&width=150",
            checkIn: "Mar 15, 2025",
            checkOut: "Mar 20, 2025",
            guests: "2 Adults",
            amount: "$1,058",
            status: "Upcoming",
            bookedOn: "Jan 10, 2025",
        },
        {
            id: "BK-12345679",
            hotel: "Urban Boutique Hotel",
            location: "New York, USA",
            image: "/placeholder.svg?height=100&width=150",
            checkIn: "Apr 5, 2025",
            checkOut: "Apr 10, 2025",
            guests: "2 Adults",
            amount: "$1,250",
            status: "Upcoming",
            bookedOn: "Jan 15, 2025",
        },
        {
            id: "BK-12345680",
            hotel: "Mountain Lodge",
            location: "Aspen, USA",
            image: "/placeholder.svg?height=100&width=150",
            checkIn: "Dec 10, 2024",
            checkOut: "Dec 15, 2024",
            guests: "2 Adults, 1 Child",
            amount: "$1,450",
            status: "Completed",
            bookedOn: "Oct 5, 2024",
        },
        {
            id: "BK-12345681",
            hotel: "Seaside Villa",
            location: "Santorini, Greece",
            image: "/placeholder.svg?height=100&width=150",
            checkIn: "Sep 20, 2024",
            checkOut: "Sep 27, 2024",
            guests: "2 Adults",
            amount: "$2,100",
            status: "Completed",
            bookedOn: "Jul 15, 2024",
        },
        {
            id: "BK-12345682",
            hotel: "City Center Hotel",
            location: "London, UK",
            image: "/placeholder.svg?height=100&width=150",
            checkIn: "Aug 5, 2024",
            checkOut: "Aug 10, 2024",
            guests: "1 Adult",
            amount: "$950",
            status: "Cancelled",
            bookedOn: "Jun 20, 2024",
        },
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1">
                <div className="container px-4 py-6 md:py-8">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-64 shrink-0">
                            <div className="sticky top-24 space-y-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="space-y-4">
                                            <div className="flex flex-col items-center">
                                                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                                                    <span className="text-2xl font-bold">JD</span>
                                                </div>
                                                <h2 className="font-medium">John Doe</h2>
                                                <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                                            </div>

                                            <nav className="space-y-1">
                                                <Link href="/account" className="flex items-center py-2 px-3 rounded-md hover:bg-muted">
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
                                                        className="mr-2"
                                                    >
                                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                                        <circle cx="12" cy="7" r="4" />
                                                    </svg>
                                                    <span>Profile</span>
                                                </Link>
                                                <Link
                                                    href="/account/bookings"
                                                    className="flex items-center py-2 px-3 rounded-md bg-muted font-medium"
                                                >
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
                                                        className="mr-2"
                                                    >
                                                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                                        <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
                                                        <path d="M12 11h4" />
                                                        <path d="M12 16h4" />
                                                        <path d="M8 11h.01" />
                                                        <path d="M8 16h.01" />
                                                    </svg>
                                                    <span>Bookings</span>
                                                </Link>
                                                <Link
                                                    href="/account/favorites"
                                                    className="flex items-center py-2 px-3 rounded-md hover:bg-muted"
                                                >
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
                                                        className="mr-2"
                                                    >
                                                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                                    </svg>
                                                    <span>Favorites</span>
                                                </Link>
                                                <Link
                                                    href="/account/settings"
                                                    className="flex items-center py-2 px-3 rounded-md hover:bg-muted"
                                                >
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
                                                        className="mr-2"
                                                    >
                                                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                                                        <circle cx="12" cy="12" r="3" />
                                                    </svg>
                                                    <span>Settings</span>
                                                </Link>
                                            </nav>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        <div className="flex-1 space-y-6">
                            <div>
                                <h1 className="text-2xl font-bold">My Bookings</h1>
                                <p className="text-muted-foreground">View and manage your hotel bookings</p>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <Input placeholder="Search bookings..." />
                                </div>
                                <div className="flex gap-2">
                                    <Select defaultValue="all">
                                        <SelectTrigger className="w-[150px]">
                                            <SelectValue placeholder="Filter by status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Bookings</SelectItem>
                                            <SelectItem value="upcoming">Upcoming</SelectItem>
                                            <SelectItem value="completed">Completed</SelectItem>
                                            <SelectItem value="cancelled">Cancelled</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Button variant="outline">
                                        <Filter className="h-4 w-4 mr-2" />
                                        Filter
                                    </Button>
                                </div>
                            </div>

                            <Tabs defaultValue="all" className="space-y-4">
                                <TabsList>
                                    <TabsTrigger value="all">All Bookings</TabsTrigger>
                                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                                    <TabsTrigger value="completed">Completed</TabsTrigger>
                                    <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                                </TabsList>

                                <TabsContent value="all" className="space-y-4">
                                    {bookings.map((booking) => (
                                        <Card key={booking.id} className="overflow-hidden">
                                            <CardContent className="p-0">
                                                <div className="flex flex-col md:flex-row">
                                                    <div className="md:w-1/4 p-4">
                                                        <img
                                                            src={booking.image || "/placeholder.svg"}
                                                            alt={booking.hotel}
                                                            width={150}
                                                            height={100}
                                                            className="rounded-md object-cover w-full h-24"
                                                        />
                                                    </div>
                                                    <div className="md:w-2/4 p-4">
                                                        <h3 className="font-semibold text-lg">{booking.hotel}</h3>
                                                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                                                            <MapPin className="h-3 w-3 mr-1" />
                                                            {booking.location}
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-2 text-sm">
                                                            <div>
                                                                <span className="text-muted-foreground">Check-in:</span>
                                                                <div className="flex items-center">
                                                                    <Calendar className="h-3 w-3 mr-1 text-muted-foreground" />
                                                                    {booking.checkIn}
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <span className="text-muted-foreground">Check-out:</span>
                                                                <div className="flex items-center">
                                                                    <Calendar className="h-3 w-3 mr-1 text-muted-foreground" />
                                                                    {booking.checkOut}
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <span className="text-muted-foreground">Guests:</span>
                                                                <div>{booking.guests}</div>
                                                            </div>
                                                            <div>
                                                                <span className="text-muted-foreground">Booked on:</span>
                                                                <div>{booking.bookedOn}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="md:w-1/4 p-4 bg-muted/30 flex flex-col justify-between">
                                                        <div>
                                                            <div className="flex justify-between items-center mb-2">
                                                                <span className="text-sm text-muted-foreground">Booking ID:</span>
                                                                <span className="text-sm font-medium">{booking.id}</span>
                                                            </div>
                                                            <div className="flex justify-between items-center mb-2">
                                                                <span className="text-sm text-muted-foreground">Total:</span>
                                                                <span className="text-lg font-bold">{booking.amount}</span>
                                                            </div>
                                                            <div className="flex justify-center mb-2">
                                                                <Badge
                                                                    className={
                                                                        booking.status === "Upcoming"
                                                                            ? "bg-blue-500"
                                                                            : booking.status === "Completed"
                                                                                ? "bg-green-500"
                                                                                : "bg-red-500"
                                                                    }
                                                                >
                                                                    {booking.status}
                                                                </Badge>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-2 mt-2">
                                                            <Button size="sm">
                                                                <Eye className="h-4 w-4 mr-2" />
                                                                View Details
                                                            </Button>
                                                            {booking.status === "Upcoming" && (
                                                                <Button variant="outline" size="sm">
                                                                    Modify Booking
                                                                </Button>
                                                            )}
                                                            <Button variant="ghost" size="sm">
                                                                <Download className="h-4 w-4 mr-2" />
                                                                Download
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </TabsContent>

                                <TabsContent value="upcoming" className="space-y-4">
                                    {bookings
                                        .filter((b) => b.status === "Upcoming")
                                        .map((booking) => (
                                            <Card key={booking.id} className="overflow-hidden">
                                                {/* Similar structure as above, filtered for upcoming bookings */}
                                                <CardContent className="p-6 text-center text-muted-foreground">
                                                    Upcoming bookings will be displayed here
                                                </CardContent>
                                            </Card>
                                        ))}
                                </TabsContent>

                                <TabsContent value="completed" className="space-y-4">
                                    {bookings
                                        .filter((b) => b.status === "Completed")
                                        .map((booking) => (
                                            <Card key={booking.id} className="overflow-hidden">
                                                {/* Similar structure as above, filtered for completed bookings */}
                                                <CardContent className="p-6 text-center text-muted-foreground">
                                                    Completed bookings will be displayed here
                                                </CardContent>
                                            </Card>
                                        ))}
                                </TabsContent>

                                <TabsContent value="cancelled" className="space-y-4">
                                    {bookings
                                        .filter((b) => b.status === "Cancelled")
                                        .map((booking) => (
                                            <Card key={booking.id} className="overflow-hidden">
                                                {/* Similar structure as above, filtered for cancelled bookings */}
                                                <CardContent className="p-6 text-center text-muted-foreground">
                                                    Cancelled bookings will be displayed here
                                                </CardContent>
                                            </Card>
                                        ))}
                                </TabsContent>
                            </Tabs>
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

