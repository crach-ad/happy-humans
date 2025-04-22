"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

interface EnrollmentFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EnrollmentForm({ open, onOpenChange }: EnrollmentFormProps) {
  const [formData, setFormData] = useState({
    studentName: "",
    studentAge: "",
    gradeLevel: "",
    parentName: "",
    email: "",
    phone: "",
    program: "programmable-electronics",
    experience: "none",
    specialNeeds: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a successful submission

    // Simulate API call with timeout
    setTimeout(() => {
      toast({
        title: "Enrollment Submitted!",
        description: "We've received your enrollment request and will contact you soon.",
      })
      onOpenChange(false)
      // Reset form
      setFormData({
        studentName: "",
        studentAge: "",
        gradeLevel: "",
        parentName: "",
        email: "",
        phone: "",
        program: "programmable-electronics",
        experience: "none",
        specialNeeds: "",
      })
    }, 1000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-yellow-600 text-2xl">Enroll in STEM Program</DialogTitle>
          <DialogDescription>
            Please fill out the form below to enroll in our STEM program. We'll contact you to confirm your enrollment.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="border-b pb-2">
              <h3 className="text-lg font-medium">Student Information</h3>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="studentName">Student Full Name</Label>
                <Input
                  id="studentName"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="studentAge">Age</Label>
                <Input
                  id="studentAge"
                  name="studentAge"
                  type="number"
                  min="5"
                  max="18"
                  value={formData.studentAge}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="gradeLevel">Grade Level</Label>
              <Select value={formData.gradeLevel} onValueChange={(value) => handleSelectChange("gradeLevel", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select grade level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="k">Kindergarten</SelectItem>
                  <SelectItem value="1">1st Grade</SelectItem>
                  <SelectItem value="2">2nd Grade</SelectItem>
                  <SelectItem value="3">3rd Grade</SelectItem>
                  <SelectItem value="4">4th Grade</SelectItem>
                  <SelectItem value="5">5th Grade</SelectItem>
                  <SelectItem value="6">6th Grade</SelectItem>
                  <SelectItem value="7">7th Grade</SelectItem>
                  <SelectItem value="8">8th Grade</SelectItem>
                  <SelectItem value="9">9th Grade</SelectItem>
                  <SelectItem value="10">10th Grade</SelectItem>
                  <SelectItem value="11">11th Grade</SelectItem>
                  <SelectItem value="12">12th Grade</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-b pb-2">
              <h3 className="text-lg font-medium">Parent/Guardian Information</h3>
            </div>

            <div className="space-y-2">
              <Label htmlFor="parentName">Parent/Guardian Full Name</Label>
              <Input id="parentName" name="parentName" value={formData.parentName} onChange={handleChange} required />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-b pb-2">
              <h3 className="text-lg font-medium">Program Information</h3>
            </div>

            <div className="space-y-2">
              <Label>Which program are you most interested in?</Label>
              <RadioGroup
                value={formData.program}
                onValueChange={(value) => handleSelectChange("program", value)}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="programmable-electronics" id="programmable-electronics" />
                  <Label htmlFor="programmable-electronics">Programmable Electronics</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="circuit-design" id="circuit-design" />
                  <Label htmlFor="circuit-design">Circuit Design</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="coding" id="coding" />
                  <Label htmlFor="coding">Coding</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="robotics" id="robotics" />
                  <Label htmlFor="robotics">Robotics</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Prior STEM experience</Label>
              <RadioGroup
                value={formData.experience}
                onValueChange={(value) => handleSelectChange("experience", value)}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="none" id="none" />
                  <Label htmlFor="none">None</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="beginner" id="beginner" />
                  <Label htmlFor="beginner">Beginner</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="intermediate" id="intermediate" />
                  <Label htmlFor="intermediate">Intermediate</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="advanced" id="advanced" />
                  <Label htmlFor="advanced">Advanced</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialNeeds">Special needs or accommodations (optional)</Label>
              <Textarea
                id="specialNeeds"
                name="specialNeeds"
                value={formData.specialNeeds}
                onChange={handleChange}
                placeholder="Please let us know if your child has any special needs or requires accommodations"
                className="min-h-[100px]"
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600">
              Submit Enrollment
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
