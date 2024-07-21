"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex bg-primary min-h-screen gap-6 flex-col items-center justify-between p-24">
      <div></div>
      <Label className="text-6xl">Welcome to KNexus</Label>
      <Button className="bg-primary-foreground text-white hover:bg-primary-foreground/80">
        <Link href={"/home"}>login</Link>
      </Button>
    </main>
  );
}
