import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, HeartIcon, ShoppingBagIcon, UsersIcon } from "lucide-react"

export default function ShoppingProgram() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/vibrant-smiley.png"
                width={40}
                height={40}
                alt="Happy Humans Logo"
                className="rounded-full"
              />
              <span className="text-xl font-bold text-orange-500">Happy Human</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-4">
              <Link href="/" className="text-sm font-medium hover:underline">
                Home
              </Link>
              <Link href="/shopping" className="text-sm font-medium text-orange-500 underline">
                Shopping Program
              </Link>
              <Link href="/stem" className="text-sm font-medium hover:underline">
                STEM Program
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline">
                About Us
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-orange-600">
                    Happy Human Shopping Program
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Providing underserved children in the United States with clothing and footwear in a dignified
                    shopping experience.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-orange-500 hover:bg-orange-600">Apply for Assistance</Button>
                  <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                    Donate Items
                  </Button>
                </div>
              </div>
              <Image
                src="/child-glasses.png"
                width={600}
                height={400}
                alt="Child with Happy Human shopping bag"
                className="mx-auto overflow-hidden rounded-xl object-contain sm:w-full"
              />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-orange-600">Our Mission</h2>
              <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl">
                Happy Human provides underserved children in the United States with clothing and footwear in a dignified
                shopping experience. We believe every child deserves to feel confident, empowered, and valued when
                receiving essential items.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card className="border-2 border-orange-100">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-xl font-bold text-orange-600">About Us</h3>
                    <p className="text-gray-600">
                      Founded by Rylee Labell, Happy Human transforms the traditional donation experience into something
                      special. Instead of simply receiving hand-me-downs, children participate in "shopping experiences"
                      where they can choose their own clothing in a boutique-like setting, complete with personalized
                      shopping bags and volunteer "shopping assistants."
                    </p>
                    <p className="text-gray-600">
                      Our organization operates on the principle that dignity matters. By creating a real shopping
                      experience, children feel empowered to make their own choices while receiving essential items they
                      need.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Image
                src="/happy-child-bags.png"
                width={500}
                height={400}
                alt="Child with Happy Human shopping bags"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-orange-600">How It Works</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                We provide a dignified shopping experience for children in need.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
              <Card className="border-2 border-orange-100 lg:col-span-5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-orange-600 mb-4">For Children & Families</h3>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                      <UsersIcon className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-600">1. Registration</h3>
                    <p className="text-gray-600">
                      Local partner organizations identify children who would benefit from our program.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                      <CalendarIcon className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-600">2. Shopping Day</h3>
                    <p className="text-gray-600">
                      Children visit our pop-up boutique where volunteers help them select clothing.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                      <UsersIcon className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-600">3. Personalized Experience</h3>
                    <p className="text-gray-600">
                      Each child receives individual attention from a volunteer "shopping assistant."
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                      <ShoppingBagIcon className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-600">4. Selection</h3>
                    <p className="text-gray-600">Children choose items they love and feel confident wearing.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                      <HeartIcon className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-600">5. Checkout</h3>
                    <p className="text-gray-600">
                      Every child receives their selections in a Happy Human shopping bag, creating a true retail
                      experience.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-100 lg:col-span-5 mt-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-orange-600 mb-4">For Donors</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col space-y-2">
                      <h4 className="font-semibold text-orange-600">Donate Clothing</h4>
                      <p className="text-gray-600">We accept new and gently used children's clothing and footwear.</p>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <h4 className="font-semibold text-orange-600">Financial Support</h4>
                      <p className="text-gray-600">
                        Monetary donations help us purchase new essential items and maintain our shopping spaces.
                      </p>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <h4 className="font-semibold text-orange-600">Volunteer</h4>
                      <p className="text-gray-600">
                        Join our team of volunteers who help create magical shopping experiences.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The Happy Human Experience */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-orange-600">
                The Happy Human Experience
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                We transform the traditional donation experience into something special.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-6">
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-orange-500">✓</span>
                    <span>Host regular "shopping day" events where children select their own clothing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-orange-500">✓</span>
                    <span>Maintain a carefully curated selection of high-quality, age-appropriate clothing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-orange-500">✓</span>
                    <span>Provide personalized shopping assistance to each child</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-orange-500">✓</span>
                    <span>
                      Ensure every child leaves with a Happy Human shopping bag filled with items they personally
                      selected
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-orange-500">✓</span>
                    <span>Create a positive, boutique-like atmosphere that promotes dignity and choice</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button className="bg-orange-500 hover:bg-orange-600">Learn More</Button>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Image
                  src="/volunteer-showing-clothes.png"
                  width={300}
                  height={300}
                  alt="Volunteer helping child select clothing"
                  className="rounded-xl object-cover w-full h-full"
                />
                <Image
                  src="/volunteers-helping.png"
                  width={300}
                  height={300}
                  alt="Volunteers helping children with clothing selection"
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="w-full py-12 md:py-24 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-orange-600">Our Impact</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Since our founding, Happy Human has made a significant difference in our community.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold text-orange-600">1000+</div>
                <p className="text-gray-600">Children served</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold text-orange-600">5</div>
                <p className="text-gray-600">Communities reached</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold text-orange-600">10,000+</div>
                <p className="text-gray-600">Clothing items distributed</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold text-orange-600">100%</div>
                <p className="text-gray-600">Dignity preserved</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 max-w-[800px] mx-auto">
                We've served thousands of children across multiple communities, distributed essential clothing items to
                families in need, created dignified shopping experiences that build confidence and self-esteem,
                transformed how clothing donations reach children in need, and built a community of dedicated volunteers
                and supporters.
              </p>
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-orange-600">Get Involved</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                There are many ways you can support our Shopping Program.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="border-2 border-orange-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <h3 className="text-xl font-bold text-orange-600">Volunteer</h3>
                    <ul className="text-gray-600 text-left space-y-2">
                      <li>• Clothing Sorters: Help organize and prepare donations</li>
                      <li>• Shopping Assistants: Guide children through their shopping experience</li>
                      <li>• Merchandisers: Help create an attractive, boutique-like environment</li>
                      <li>• Event Coordinators: Help plan and execute shopping days</li>
                    </ul>
                    <Button className="bg-orange-500 hover:bg-orange-600">Become a Volunteer</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <h3 className="text-xl font-bold text-orange-600">Donate</h3>
                    <ul className="text-gray-600 text-left space-y-2">
                      <li>• Clothing & Footwear: New or gently used items for children of all ages</li>
                      <li>• Financial Contributions: Support our operations and programs</li>
                      <li>• Corporate Partnerships: Sponsor events or provide in-kind donations</li>
                    </ul>
                    <Button className="bg-orange-500 hover:bg-orange-600">Donate Now</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <h3 className="text-xl font-bold text-orange-600">Partner With Us</h3>
                    <p className="text-gray-600">
                      Schools, community organizations, and businesses can partner with us to identify children in need
                      or host shopping events.
                    </p>
                    <Button className="bg-orange-500 hover:bg-orange-600">Become a Partner</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-orange-600">Contact Us</h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Join our mission to bring happiness, dignity, and opportunity to underserved children.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Contact Us</Button>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center text-gray-600">
                <p>Email: info@happyhuman.org</p>
                <p>Instagram: @happyhumanworld</p>
                <p>Phone: (555) 123-4567</p>
                <p className="text-sm italic mt-2">Happy Human is a registered 501(c)(3) nonprofit organization.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm text-gray-500 md:text-left">
            © {new Date().getFullYear()} Happy Human. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
