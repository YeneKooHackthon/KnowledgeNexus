"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function Courses() {
  return (
    <div className="flex flex-col min-h-dvh ">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-primary-foreground">
        <div className="container px-4 md:px-6 grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl">
              Introduction to Web Development
            </h1>
            <p className="text-primary-foreground/80 text-xl md:text-2xl">
              Learn the fundamentals of web development and build your first
              website.
            </p>
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Enroll Now
            </Button>
          </div>
          <Image
            src="https://cdn.prod.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b53d6186fc53_ABM%20College%20Web%20developer%20main.jpg"
            width="600"
            height="400"
            alt="Course Hero"
            className="rounded-lg"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 grid gap-12">
          <div className="grid gap-4">
            <h2 className="text-3xl font-bold">Course Curriculum</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-muted rounded-lg p-6 space-y-2">
                <h3 className="text-xl font-semibold">Introduction to HTML</h3>
                <p className="text-muted-foreground">
                  Learn the basics of HTML and how to structure web pages.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6 space-y-2">
                <h3 className="text-xl font-semibold">Introduction to CSS</h3>
                <p className="text-muted-foreground">
                  Discover the power of CSS and how to style your web pages.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6 space-y-2">
                <h3 className="text-xl font-semibold">
                  JavaScript Fundamentals
                </h3>
                <p className="text-muted-foreground">
                  Dive into the world of JavaScript and learn how to add
                  interactivity to your websites.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6 space-y-2">
                <h3 className="text-xl font-semibold">Responsive Design</h3>
                <p className="text-muted-foreground">
                  Understand the principles of responsive design and create
                  websites that work on any device.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6 space-y-2">
                <h3 className="text-xl font-semibold">
                  Git and Version Control
                </h3>
                <p className="text-muted-foreground">
                  Learn how to use Git to manage your code and collaborate with
                  others.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6 space-y-2">
                <h3 className="text-xl font-semibold">
                  Deployment and Hosting
                </h3>
                <p className="text-muted-foreground">
                  Discover how to deploy your web applications and host them
                  online.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <h2 className="text-3xl font-bold">About the Instructor</h2>
            <div className="bg-muted rounded-lg p-6 grid gap-4 sm:grid-cols-2 items-center">
              <img
                src="/placeholder.svg"
                width="120"
                height="120"
                alt="Instructor"
                className="rounded-full mx-auto"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-muted-foreground">
                  John is a seasoned web developer with over 10 years of
                  experience. He is passionate about teaching and helping others
                  learn the art of web development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 grid gap-12">
          <div className="grid gap-4">
            <h2 className="text-3xl font-bold">Enroll Now</h2>
            <Card className="w-full max-w-lg">
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
                <CardDescription>
                  Enter your payment information to complete the enrollment.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input
                    id="card-number"
                    placeholder="Enter your card number"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiration">Expiration</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Select>
                        <SelectTrigger id="expiration-month">
                          <SelectValue placeholder="Month" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 12 }, (_, i) => (
                            <SelectItem key={i + 1} value={i + 1}>
                              {i + 1}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger id="expiration-year">
                          <SelectValue placeholder="Year" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 10 }, (_, i) => (
                            <SelectItem key={i + 2023} value={i + 2023}>
                              {i + 2023}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="Enter your CVV" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="coupon">Coupon Code</Label>
                  <div className="flex gap-2">
                    <Input id="coupon" placeholder="Enter your coupon code" />
                    <Button>Apply</Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">Enroll Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
