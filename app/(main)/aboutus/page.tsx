import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full">
      <section className="py-12 lg:py-16 xl:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid overflow-hidden items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                About our company
              </h1>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                We are a team of passionate individuals dedicated to making the
                web a better place. Our mission is to provide developers with
                the tools they need to build amazing user experiences. Our
                vision is a web that is fast, accessible, and secure for all. We
                value openness, inclusivity, and innovation.
              </p>
            </div>
            <div className="grid gap-4 sm:gap-8">
              <Image
                src="https://static.vecteezy.com/system/resources/previews/007/931/696/non_2x/about-us-button-about-us-text-template-for-website-about-us-icon-flat-style-vector.jpg"
                width="600"
                height="300"
                alt="Company"
                className="rounded-lg object-cover aspect-[2/1]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-16 xl:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col gap-2 lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Meet the Team
              </h2>
              <p className="max-w-prose text-gray-500 md:text-xl dark:text-gray-400">
                We&apos;re a diverse team of designers, developers, and creators
                who are passionate about building the tools and platforms that
                power the web.
              </p>
            </div>
            <div className="grid gap-6 lg:col-start-2 lg:col-span-2 lg:grid-cols-2 lg:grid-rows-auto-auto">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 overflow-hidden rounded-full">
                  <Image
                    src="https://cdn.icon-icons.com/icons2/582/PNG/512/man-2_icon-icons.com_55041.png"
                    width="100"
                    height="100"
                    alt="Avatar"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="grid gap-1.5">
                  <h3 className="font-semibold">Alice Johnson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Product Manager
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 overflow-hidden rounded-full">
                  <Image
                    src="https://cdn.icon-icons.com/icons2/582/PNG/512/man-2_icon-icons.com_55041.png"
                    width="100"
                    height="100"
                    alt="Avatar"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="grid gap-1.5">
                  <h3 className="font-semibold">Bob Smith</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Software Engineer
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 overflow-hidden rounded-full">
                  <Image
                    src="https://cdn.icon-icons.com/icons2/582/PNG/512/man-2_icon-icons.com_55041.png"
                    width="100"
                    height="100"
                    alt="Avatar"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="grid gap-1.5">
                  <h3 className="font-semibold">Ella Brown</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    UX Designer
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 overflow-hidden rounded-full">
                  <Image
                    src="https://cdn.icon-icons.com/icons2/582/PNG/512/man-2_icon-icons.com_55041.png"
                    width="100"
                    height="100"
                    alt="Avatar"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="grid gap-1.5">
                  <h3 className="font-semibold">Mike Wilson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Frontend Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-16 xl:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:gap-12 lg:grid-cols-2">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Contact Us
              </h2>
              <p className="max-w-prose text-gray-500 md:text-xl dark:text-gray-400">
                Have questions or feedback? We&apos;d love to hear from you.
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-base">
                  Name
                </Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-base">
                  Email
                </Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message" className="text-base">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  className="min-h-[150px] resize-y"
                />
              </div>
              <Button size="lg">Submit</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
