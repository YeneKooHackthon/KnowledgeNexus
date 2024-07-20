"use client";

import { useSearchParams } from "next/navigation";

import LearnDetails from "@/components/learnDetails";
import Search from "@/components/search";

export default function Learn() {
  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  return (
    <div className="w-full py-3 h-full flex flex-col justify-between items-center relative">
      {search ? <Search /> : <LearnDetails />}
    </div>
  );
}
