import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

export default function LpPage() {
  return (
    <main className="font-sans text-gray-900 bg-white">
      <header className="flex items-center justify-between py-6 px-4 bg-blue-500 text-white">
        <h1 className="text-3xl font-bold">Education Platform</h1>
        <nav className="space-x-4">
          <Link href="#" className="text-white" prefetch={false}>
            About Us
          </Link>
          <Link href="#" className="text-white" prefetch={false}>
            Courses
          </Link>
          <Link href="#" className="text-white" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <section className="bg-blue-100 text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">Empower Your Education</h2>
        <p className="text-xl text-blue-700 mb-6">
          Join our platform and explore a variety of courses to boost your
          knowledge.
        </p>
        <Button className="px-6 py-2 rounded bg-blue-500 text-white">
          Explore Now
        </Button>
      </section>
      <section className="grid grid-cols-3 gap-4 p-6">
        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">Program 1</h3>
          </CardHeader>
          <CardContent>
            <img
              src="/placeholder.svg"
              alt="Program 1"
              className="w-full aspect-[1/1] object-cover"
            />
            <p className="mt-4">A brief description about Program 1.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">Program 2</h3>
          </CardHeader>
          <CardContent>
            <img
              src="/placeholder.svg"
              alt="Program 2"
              className="w-full aspect-[1/1] object-cover"
            />
            <p className="mt-4">A brief description about Program 2.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">Program 3</h3>
          </CardHeader>
          <CardContent>
            <img
              src="/placeholder.svg"
              alt="Program 3"
              className="w-full aspect-[1/1] object-cover"
            />
            <p className="mt-4">A brief description about Program 3.</p>
          </CardContent>
        </Card>
      </section>
      <section className="bg-blue-50 p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h2>
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <SchoolIcon className="w-12 h-12 mb-4" />
            <p className="text-center">
              We provide the best quality education for our students.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <SchoolIcon className="w-12 h-12 mb-4" />
            <p className="text-center">
              Our teachers are highly experienced in their fields.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <SchoolIcon className="w-12 h-12 mb-4" />
            <p className="text-center">
              We offer flexible learning options for all our students.
            </p>
          </div>
        </div>
      </section>
      <section className="py-6 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Avatar
              src="/placeholder.svg?height=50&width=50"
              alt="User 1"
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-lg font-bold">User 1</h3>
              <p>
                "This is a great platform for learning. I had a wonderful
                experience!"
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Avatar
              src="/placeholder.svg?height=50&width=50"
              alt="User 2"
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-lg font-bold">User 2</h3>
              <p>
                "The courses are very informative and the teachers are amazing."
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-blue-500 text-white py-6 px-4 text-center">
        <nav className="mb-4">
          <Link href="#" className="mx-2" prefetch={false}>
            About Us
          </Link>
          <Link href="#" className="mx-2" prefetch={false}>
            Contact
          </Link>
          <Link href="#" className="mx-2" prefetch={false}>
            Privacy Policy
          </Link>
        </nav>
        <div className="flex justify-center space-x-4">
          <Link href="#" prefetch={false}>
            <FacebookIcon className="w-6 h-6" />
          </Link>
          <Link href="#" prefetch={false}>
            <TwitterIcon className="w-6 h-6" />
          </Link>
          <Link href="#" prefetch={false}>
            <InstagramIcon className="w-6 h-6" />
          </Link>
        </div>
      </footer>
    </main>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function SchoolIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
