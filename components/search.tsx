"use client";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";

import {
  Pi,
  Computer,
  Paperclip,
  Send,
  Variable,
  Stethoscope,
  CircleArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Search() {
  const [qst, setQST] = useState(null);
  const searchParams = useSearchParams();

  const agentPram = searchParams.get("agent");

  return (
    <main className="w-full py-3 h-full flex flex-col justify-between items-center relative">
      <div className="pb-[5em] md:pb-[10em] flex h-full flex-col gap-4 w-[97.5%] md:w-[50em] items-center justify-center md:p-24">
        <Label className="md:pb-4 pb-2 md:text-5xl text-[7vw] font-semibold">
          {agentPram ?? "KnowledgeNexus"}
        </Label>
        <div className="w-full h-auto  p-1 pb-2 border-2 border-primary rounded-lg flex flex-col gap-4">
          <Textarea
            onChange={(e: any) => setQST(e.target.value)}
            placeholder="Ask anything..."
            className="border-none h-auto bg-transparent text-sm font-medium resize-y placeholder:text-gray-400"
          />
          <div className="px-2 w-full flex justify-between items-center">
            <Button variant="ghost" className=" gap-2 p-2 hover:bg-primary/20">
              <Paperclip size={20} /> Attach PDF
            </Button>
            <Link href={`/home/details?qst=${qst}`}>
              <Button className="gap-2 p-2 hover:bg-primary/20" variant="ghost">
                <CircleArrowRight size={25} />
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-2">
          <Button
            variant="ghost"
            className="border-2 border-primary hover:bg-primary/20 px-3 py-6 flex justify-start gap-2 items-center rounded-md"
          >
            <Computer
              size={25}
              className="bg-primary text-black p-1 rounded-sm"
            />{" "}
            Intro To CS
          </Button>
          <Button
            variant="ghost"
            className="border-2 border-primary hover:bg-primary/20 px-3 py-6 flex justify-start gap-2 items-center rounded-md"
          >
            <Variable
              size={25}
              className="bg-primary text-black p-1 rounded-sm"
            />{" "}
            Explain Torque Formula
          </Button>
          <Button
            variant="ghost"
            className="border-2 border-primary hover:bg-primary/20 px-3 py-6 flex justify-start gap-2 items-center rounded-md"
          >
            <Stethoscope
              size={25}
              className="bg-primary text-black p-1 rounded-sm"
            />{" "}
            What is Cell Biology
          </Button>
          <Button
            variant="ghost"
            className="border-2 border-primary hover:bg-primary/20 px-3 py-6 flex justify-start gap-2 items-center rounded-md"
          >
            <Pi size={25} className="bg-primary text-black p-1 rounded-sm" />{" "}
            Calculus in simple terms
          </Button>
        </div>
      </div>

      <Label className=" text-gray-400 text-[10px] md:text-sm">
        KNexus can make mistakes. Check important info.
      </Label>
    </main>
  );
}
