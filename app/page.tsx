import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Get the best advices from our experts, including expert artists,
        painters, marathon enthusiasts and RDX, totally free.
      </p>
    </BackgroundLines>
  );
}
