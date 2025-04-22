import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center">
            <Image src="/vibrant-smiley.png" width={40} height={40} alt="Happy Humans Logo" className="rounded-full animate-float" />
            <span className="text-xl font-bold text-orange-500">Happy Humans</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="#" className="text-sm font-medium hover:underline">
                About Us
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline">
                Contact
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline">
                Donate
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-orange-600 animate-slide-up">
                  Making a Difference, One Human at a Time
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl animate-slide-up" style={{animationDelay: '0.2s'}}>
                  Happy Humans is dedicated to serving our community through Shopping Spree programs and STEM education
                  initiatives.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 animate-slide-up shadow-md hover:shadow-lg transition-all duration-300" style={{animationDelay: '0.4s'}}>Learn More About Our Mission</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-orange-600 animate-slide-up">Choose Your Path</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Explore our two main programs and see how we're making a difference in our community.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card className="flex flex-col h-full overflow-hidden border-2 border-orange-200 transition-all hover:shadow-lg hover-scale animate-slide-in-left rounded-xl">
                <CardHeader className="pb-0">
                  <CardTitle className="text-2xl text-orange-600 font-bold">Happy Humans Shopping</CardTitle>
                  <CardDescription>Empowering through essential items</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pt-6">
                  <div className="relative h-60 w-full overflow-hidden rounded-lg mb-4">
                    <Image src="/market-stroll.png" alt="Shopping Spree Program" fill className="object-cover" />
                  </div>
                  <p className="text-gray-600">
                    Our Shopping Spree program provides essential items to those in need, helping families and
                    individuals with dignity and care.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/shopping" className="w-full">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 shadow-md hover:shadow-lg transition-all duration-300">Enter Shopping Program</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full overflow-hidden border-2 border-yellow-200 transition-all hover:shadow-lg hover-scale animate-slide-in-right rounded-xl">
                <CardHeader className="pb-0">
                  <CardTitle className="text-2xl text-yellow-600 font-bold">Happy Humans STEM</CardTitle>
                  <CardDescription>Building futures through education</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pt-6">
                  <div className="relative h-60 w-full overflow-hidden rounded-lg mb-4">
                    <Image src="/images/stem-students.jpg" alt="Children engaged in STEM learning with tablets" fill className="object-cover" />
                  </div>
                  <p className="text-gray-600">
                    Our STEM program provides hands-on educational opportunities in Science, Technology, Engineering, and
                    Mathematics to inspire the next generation of innovators and problem-solvers.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/stem" className="w-full">
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 shadow-md hover:shadow-lg transition-all duration-300">Enter STEM Program</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-orange-600 animate-slide-up">Join Our Mission</h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl animate-slide-up" style={{animationDelay: '0.2s'}}>
                  Together, we can make a positive impact in our community. Volunteer, donate, or spread the word about
                  Happy Humans.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 animate-slide-up" style={{animationDelay: '0.4s'}}>
                <Button className="bg-orange-500 hover:bg-orange-600 shadow-md hover:shadow-lg transition-all duration-300">Volunteer</Button>
                <Button className="bg-yellow-500 hover:bg-yellow-600 shadow-md hover:shadow-lg transition-all duration-300">Donate</Button>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 shadow-md hover:shadow-lg transition-all duration-300">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm text-gray-500 md:text-left">
            © {new Date().getFullYear()} Happy Humans. All rights reserved.
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
