"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

type NavigationItemProps = {
  step: {
    id: number;
    title: string;
    route: string;
    link: string;
  };
  actualStep: number;
};

const NavigationItem = ({ step, actualStep }: NavigationItemProps) => {
  return (
    <div key={step.id} className="flex items-start w-full gap-3">
      <div>
        <div className="flex items-center gap-4">
          <div
            key={step.id}
            className={cn(
              `size-10 flex items-center justify-center rounded-full border-2 select-none 
              transition-colors duration-300 ease-in-out delay-300 `,
              step.id === actualStep
                ? " border-[#32ABF2] "
                : step.id < actualStep
                ? "bg-[#32ABF2] border-[#32ABF2]"
                : "border-[#5D7FA3] text-white",
              actualStep === 3 && "border-[#32ABF2] bg-[#32ABF2]"
            )}
          >
            {(step.id < actualStep || actualStep === 3) && (
              <Check className="size-5 text-white" />
            )}
          </div>
          <p
            className={cn(
              "text-[#5D7FA3] text-[16px]",
              step.id <= actualStep && "text-[#ffffff]"
            )}
          >
            {step.title}
          </p>
        </div>

        {step.id < 3 && (
          <div className="flex-grow w-[2px] h-12 relative ml-0">
            <div
              className={cn(
                "absolute top-0 left-5 w-full h-full bg-[#32ABF2]",
                step.id === actualStep && "bg-[#5D7FA3]"
              )}
            />

            <div
              className={`absolute top-0 left-5 w-full h-full bg-[#5D7FA3] transition-transform duration-300
                 ease-in-out origin-bottom after:transform ${
                   step.id > actualStep ? "scale-y-100" : "scale-y-0"
                 }`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationItem;
