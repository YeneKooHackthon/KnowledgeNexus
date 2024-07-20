import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FilePlus } from "lucide-react";

export default function DetailsPageInput() {
  return (
    <div className="max-w-3xl flex w-full h-[80%] pt-1  items-center space-x-2">
      <Input
        type="text"
        placeholder="Type your follow up question..."
        className="h-full"
      />
      <Button type="submit" className="h-full">
        <FilePlus />
      </Button>
    </div>
  );
}
