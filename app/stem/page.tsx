"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpenIcon,
  ComponentIcon as ChipIcon,
  CircuitBoardIcon,
  CodeIcon,
  GraduationCapIcon,
  LightbulbIcon,
  RocketIcon,
} from "lucide-react"
import { EnrollmentForm } from "@/components/enrollment-form"

export default function StemProgram() {
  const [enrollmentFormOpen, setEnrollmentFormOpen] = useState(false)

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
              <span className="text-xl font-bold text-yellow-500">Happy Humans</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-4">
              <Link href="/" className="text-sm font-medium hover:underline">
                Home
              </Link>
              <Link href="/shopping" className="text-sm font-medium hover:underline">
                Shopping Program
              </Link>
              <Link href="/stem" className="text-sm font-medium text-yellow-500 underline">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-yellow-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-yellow-600">
                    Happy Humans STEM Education
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Inspiring, educating, and empowering future innovators by providing underserved students with the
                    tools, mentorship, and experiences necessary to excel in STEM fields.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-yellow-500 hover:bg-yellow-600" onClick={() => setEnrollmentFormOpen(true)}>
                    Enroll in a Program
                  </Button>
                  <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-50">
                    Become a Mentor
                  </Button>
                </div>
              </div>
              <Image
                src="/electronics-project.jpeg"
                width={600}
                height={400}
                alt="Student working on an electronics project"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>

        {/* Program Overview Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-yellow-600">Program Overview</h2>
              <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl">
                Happy STEM is a K-12 engineering, technology, and entrepreneurship program designed to bridge the
                opportunity gap for underserved students. We define "underserved" as anyone lacking consistent access to
                STEM engagement and personalized feedback.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card className="border-2 border-yellow-100">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-xl font-bold text-yellow-600">Mission Statement</h3>
                    <p className="text-gray-600">
                      To deliver high-quality STEM education to underserved students, fostering curiosity, creativity,
                      and entrepreneurial thinking through hands-on learning experiences.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-100">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-xl font-bold text-yellow-600">Vision</h3>
                    <p className="text-gray-600">
                      We envision a world where every child, regardless of background, has access to transformative STEM
                      education and the opportunity to contribute to society as innovators and leaders.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Objectives Section */}
        <section className="w-full py-12 md:py-24 bg-yellow-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-yellow-600">Key Objectives</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Our program is built around four core objectives that guide everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-2 border-yellow-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                      <RocketIcon className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-yellow-600">1. Engage</h3>
                    <p className="text-gray-600">
                      Provide consistent, weekly STEM exposure to students in underserved communities.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                      <BookOpenIcon className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-yellow-600">2. Educate</h3>
                    <p className="text-gray-600">
                      Develop technical, critical thinking, and entrepreneurial skills through hands-on projects.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                      <LightbulbIcon className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-yellow-600">3. Empower</h3>
                    <p className="text-gray-600">
                      Build confidence and self-efficacy in students by fostering a supportive learning environment.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                      <GraduationCapIcon className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-yellow-600">4. Expand</h3>
                    <p className="text-gray-600">
                      Partner with schools, nonprofits, and community organizations to maximize reach and impact.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Program Structure Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-yellow-600">Program Structure</h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Our carefully designed program structure ensures consistent, high-quality STEM education.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <Card className="border-2 border-yellow-100">
                    <CardContent className="p-6">
                      <div className="flex flex-col space-y-4">
                        <h3 className="text-xl font-bold text-yellow-600">Weekly Sessions</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-center">
                            <span className="mr-2 text-yellow-500">✓</span> Every Saturday morning
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2 text-yellow-500">✓</span> 2-3 hours per session
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2 text-yellow-500">✓</span> Instructor-to-Student Ratio: 1:10
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2 text-yellow-500">✓</span> Content Focus: Engineering, coding,
                            robotics, entrepreneurship, and hands-on STEM challenges
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-yellow-100">
                    <CardContent className="p-6">
                      <div className="flex flex-col space-y-4">
                        <h3 className="text-xl font-bold text-yellow-600">Curriculum Design</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-center">
                            <span className="mr-2 text-yellow-500">✓</span> Aligned with Next Generation Science
                            Standards (NGSS) and CIE Computing frameworks
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2 text-yellow-500">✓</span> Real-world problem-solving and project-based
                            learning
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2 text-yellow-500">✓</span> Career exploration through guest speakers,
                            field trips, and mentorship
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <Image
                src="/students-collaborating.jpeg"
                width={600}
                height={400}
                alt="Students collaborating on an electronics project"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>

        {/* Target Demographic Section */}
        <section className="w-full py-12 md:py-24 bg-yellow-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-yellow-600">
                    Target Demographic
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Our program is designed to reach students who need it most.
                  </p>
                  <ul className="space-y-2 text-gray-600 mt-4">
                    <li className="flex items-center">
                      <span className="mr-2 text-yellow-500">✓</span> Age Range: K-12 students
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-yellow-500">✓</span> Focus Group: Underserved communities with limited
                      STEM resources
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-yellow-500">✓</span> Enrollment Goal: Start with 50 students in Year 1,
                      scaling by 25% annually
                    </li>
                  </ul>
                </div>
                <div>
                  <Button className="bg-yellow-500 hover:bg-yellow-600" onClick={() => setEnrollmentFormOpen(true)}>
                    Apply Now
                  </Button>
                </div>
              </div>
              <Image
                src="/student-coding.jpeg"
                width={500}
                height={400}
                alt="Student working on circuit simulation software"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/electronics-project.jpeg"
                width={600}
                height={400}
                alt="Student working on an electronics project with Arduino"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-yellow-600">Ready to Enroll?</h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Our STEM program is designed for K-12 students from underserved communities. Join us every Saturday
                    for engaging, hands-on learning.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="mr-2 text-yellow-500">✓</span> Weekly Saturday morning sessions (2-3 hours)
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-yellow-500">✓</span> Small class sizes (1:10 instructor ratio)
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-yellow-500">✓</span> Hands-on engineering, coding, and robotics
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-yellow-500">✓</span> Project-based learning aligned with NGSS standards
                    </li>
                  </ul>
                </div>
                <div>
                  <Button className="bg-yellow-500 hover:bg-yellow-600" onClick={() => setEnrollmentFormOpen(true)}>
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="w-full py-12 md:py-24 bg-yellow-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-yellow-600">Our Impact</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                See how our STEM programs are making a difference in our community.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold text-yellow-600">1,200+</div>
                <p className="text-gray-600">Students served annually</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold text-yellow-600">92%</div>
                <p className="text-gray-600">Report increased interest in STEM subjects</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold text-yellow-600">85%</div>
                <p className="text-gray-600">Of our teens pursue STEM in higher education</p>
              </div>
            </div>
          </div>
        </section>

        {/* Student Projects Showcase */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-yellow-600">Student Projects</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Our students work on exciting hands-on projects that build real-world skills.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-2 border-yellow-100">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100">
                      <ChipIcon className="h-10 w-10 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-yellow-600">Programmable Electronics</h3>
                    <p className="text-gray-600">
                      Students learn to program microcontrollers and build interactive electronic projects using sensors
                      and actuators.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-100">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100">
                      <CircuitBoardIcon className="h-10 w-10 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-yellow-600">Circuit Design</h3>
                    <p className="text-gray-600">
                      Students learn to design and simulate circuits before building them, understanding electrical
                      engineering principles.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-100">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100">
                      <CodeIcon className="h-10 w-10 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-yellow-600">Coding</h3>
                    <p className="text-gray-600">
                      Students develop programming skills through hands-on projects, learning languages like Python,
                      JavaScript, and block-based coding.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-100">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100">
                      <RocketIcon className="h-10 w-10 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-yellow-600">Robotics</h3>
                    <p className="text-gray-600">
                      Students build and program robots to solve challenges, learning mechanics, electronics, and
                      programming.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section className="w-full py-12 md:py-24 bg-yellow-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-yellow-600">Get Involved</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                There are many ways you can support our STEM education initiatives.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="border-2 border-yellow-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <h3 className="text-xl font-bold text-yellow-600">Become a Mentor</h3>
                    <p className="text-gray-600">
                      Share your expertise and inspire the next generation of STEM professionals. We welcome mentors
                      from all STEM fields.
                    </p>
                    <Button className="bg-yellow-500 hover:bg-yellow-600">Apply as Mentor</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <h3 className="text-xl font-bold text-yellow-600">Donate Equipment</h3>
                    <p className="text-gray-600">
                      Help us provide quality STEM education by donating computers, robotics kits, lab equipment, or
                      other STEM learning tools.
                    </p>
                    <Button className="bg-yellow-500 hover:bg-yellow-600">Donate Equipment</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <h3 className="text-xl font-bold text-yellow-600">Sponsor a Student</h3>
                    <p className="text-gray-600">
                      Provide financial support to ensure that all children, regardless of economic background, can
                      access our STEM programs.
                    </p>
                    <Button className="bg-yellow-500 hover:bg-yellow-600">Sponsor Now</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-yellow-600">
                  Contact Our STEM Program Team
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Have questions about our STEM education initiatives? We're here to help.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600">Contact Us</Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center text-gray-600">
                <p>Email: stem@happyhumans.org</p>
                <p>Phone: (555) 987-6543</p>
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

      {/* Enrollment Form Modal */}
      <EnrollmentForm open={enrollmentFormOpen} onOpenChange={setEnrollmentFormOpen} />
    </div>
  )
}
