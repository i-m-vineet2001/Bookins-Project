import { Link } from "react-router-dom";
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Separator } from "../components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Checkbox } from "../components/ui/checkbox"
import { Table, TableBody, TableCell, TableRow } from "../components/ui/table"
import { ArrowLeft, Calendar, Check, CreditCard, Info, Lock, MapPin, Shield, Star, Users } from "lucide-react"
import Navbar from "../components/Navbar";

export default function BookingPage() {
  return (
    <div className="flex flex-col min-h-screen">

      <Navbar />
      <main className="flex-1">
        <div className="container px-4 py-6 md:py-8">
          <Link href="/hotels/1" className="inline-flex items-center text-sm font-medium mb-4 hover:underline">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to hotel details
          </Link>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-6">
              <div>
                <h1 className="text-2xl font-bold">Complete Your Booking</h1>
                <p className="text-muted-foreground">You're booking a stay at Luxury Resort & Spa in Bali, Indonesia</p>
              </div>

              <Tabs defaultValue="details" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="details">Your Details</TabsTrigger>
                  <TabsTrigger value="payment">Payment</TabsTrigger>
                  <TabsTrigger value="confirm">Confirmation</TabsTrigger>
                </TabsList>

                <TabsContent value="details" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Guest Information</CardTitle>
                      <CardDescription>Please enter the guest details for this booking.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" placeholder="Enter first name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" placeholder="Enter last name" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="Enter email address" />
                        <p className="text-sm text-muted-foreground">
                          Your booking confirmation will be sent to this email address.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="Enter phone number" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="special-requests" />
                          <label
                            htmlFor="special-requests"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            I have special requests
                          </label>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="special-requests-text">Special Requests (optional)</Label>
                        <textarea
                          id="special-requests-text"
                          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter any special requests or preferences"
                        />
                        <p className="text-sm text-muted-foreground">
                          Special requests cannot be guaranteed but the hotel will do its best to accommodate your
                          needs.
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t p-6">
                      <Button variant="outline" asChild>
                        <Link href="/hotels/1">Cancel</Link>
                      </Button>
                      <Button>Continue to Payment</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="payment" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Information</CardTitle>
                      <CardDescription>Please enter your payment details to complete the booking.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Payment Method</Label>
                        <RadioGroup defaultValue="credit-card" className="grid grid-cols-3 gap-4">
                          <div>
                            <RadioGroupItem value="credit-card" id="credit-card" className="peer sr-only" />
                            <Label
                              htmlFor="credit-card"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <CreditCard className="mb-3 h-6 w-6" />
                              Credit Card
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="paypal" id="paypal" className="peer sr-only" />
                            <Label
                              htmlFor="paypal"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mb-3 h-6 w-6"
                              >
                                <path d="M7 11l5-5 5 5" />
                                <path d="M7 13l5 5 5-5" />
                              </svg>
                              PayPal
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="apple-pay" id="apple-pay" className="peer sr-only" />
                            <Label
                              htmlFor="apple-pay"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mb-3 h-6 w-6"
                              >
                                <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                                <path d="M10 2c1 .5 2 2 2 5" />
                              </svg>
                              Apple Pay
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-4 mt-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="card-name">Name on Card</Label>
                            <Input id="card-name" placeholder="Enter name on card" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="card-number">Card Number</Label>
                            <Input id="card-number" placeholder="0000 0000 0000 0000" />
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry-month">Expiry Month</Label>
                            <Select>
                              <SelectTrigger id="expiry-month">
                                <SelectValue placeholder="Month" />
                              </SelectTrigger>
                              <SelectContent>
                                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                                  <SelectItem key={month} value={month.toString().padStart(2, "0")}>
                                    {month.toString().padStart(2, "0")}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="expiry-year">Expiry Year</Label>
                            <Select>
                              <SelectTrigger id="expiry-year">
                                <SelectValue placeholder="Year" />
                              </SelectTrigger>
                              <SelectContent>
                                {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                                  <SelectItem key={year} value={year.toString()}>
                                    {year}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 mt-4">
                        <Checkbox id="save-card" />
                        <label
                          htmlFor="save-card"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Save card for future bookings
                        </label>
                      </div>

                      <div className="flex items-center space-x-2 mt-2">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the{" "}
                          <Link href="/terms" className="text-primary hover:underline">
                            terms and conditions
                          </Link>
                        </label>
                      </div>

                      <div className="flex items-start mt-4 p-3 bg-muted rounded-md">
                        <Lock className="h-5 w-5 mr-2 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">
                          Your payment information is encrypted and secure. We never store your full credit card
                          details.
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t p-6">
                      <Button variant="outline">Back</Button>
                      <Button>Complete Booking</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="confirm" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Booking Confirmation</CardTitle>
                      <CardDescription>
                        Your booking has been confirmed. Thank you for choosing Bookins!
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-green-50 border border-green-200 rounded-md flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-green-800">Booking Successful</h3>
                          <p className="text-sm text-green-700">
                            Your booking confirmation has been sent to your email address.
                          </p>
                        </div>
                      </div>

                      <div className="border rounded-md overflow-hidden">
                        <div className="bg-muted p-4">
                          <h3 className="font-semibold">Booking Details</h3>
                        </div>
                        <div className="p-4 space-y-4">
                          <div className="flex items-center">
                            <div className="w-16 h-16 rounded-md overflow-hidden mr-4">
                              <img
                                src="/placeholder.svg?height=64&width=64"
                                alt="Luxury Resort & Spa"
                                width={64}
                                height={64}
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium">Luxury Resort & Spa</h4>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <MapPin className="h-3 w-3 mr-1" />
                                Bali, Indonesia
                              </div>
                            </div>
                          </div>

                          <Separator />

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Check-in</p>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>Mar 15, 2025</span>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Check-out</p>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                                <span>Mar 20, 2025</span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm text-muted-foreground">Guests</p>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span>2 Adults</span>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm text-muted-foreground">Room Type</p>
                            <p className="font-medium">Deluxe Room</p>
                          </div>

                          <Separator />

                          <div>
                            <h4 className="font-medium mb-2">Price Details</h4>
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
                          </div>

                          <div className="flex items-start p-3 bg-muted rounded-md">
                            <Info className="h-5 w-5 mr-2 text-muted-foreground flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-muted-foreground">
                              Your booking reference number is <span className="font-medium">BK-12345678</span>. Please
                              keep this for your records.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t p-6">
                      <Button variant="outline">Print Confirmation</Button>
                      <Button asChild>
                        <Link href="/account/bookings">View My Bookings</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="w-full md:w-80 lg:w-96 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Booking Summary</h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-md overflow-hidden mr-4">
                        <img
                          src="/placeholder.svg?height=64&width=64"
                          alt="Luxury Resort & Spa"
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">Luxury Resort & Spa</h3>
                        <div className="flex items-center text-sm">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                          <span>4.8</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1" />
                          Bali, Indonesia
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Check-in</span>
                        <span className="font-medium">Mar 15, 2025</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-1">
                        <span>Check-out</span>
                        <span className="font-medium">Mar 20, 2025</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-1">
                        <span>Length of stay</span>
                        <span className="font-medium">5 nights</span>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Room type</span>
                        <span className="font-medium">Deluxe Room</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-1">
                        <span>Guests</span>
                        <span className="font-medium">2 Adults</span>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Room price</span>
                        <span>$180 × 5 nights</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-1">
                        <span>Taxes and fees</span>
                        <span>$108</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-1">
                        <span>Resort fee</span>
                        <span>$50</span>
                      </div>
                      <div className="flex items-center justify-between font-medium mt-2">
                        <span>Total</span>
                        <span>$1,058</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-2">Cancellation Policy</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Free cancellation until March 12, 2025. After that, you will be charged the full amount.
                  </p>
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                      <span className="font-medium text-primary">Free Cancellation</span> available with this booking
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-2">Need Help?</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our customer support team is available 24/7 to assist you with your booking.
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

