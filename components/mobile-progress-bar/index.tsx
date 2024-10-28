"use client";

import React from "react";
import { Button } from "../ui/button";
import { navigationRoutes } from "@/lib/routes";
import { useChadContext } from "@/store/context";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const MobileProgressBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { actualStep } = useChadContext();

  const relevantPath = "/" + pathname.split("/").slice(1, 3).join("/");

  const currentStep = navigationRoutes.findIndex(
    (step) => step.link === relevantPath
  );

  const nextStep = () => {
    if (currentStep < navigationRoutes.length - 1) {
      return router.push(navigationRoutes[currentStep + 1].link);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      return router.push(navigationRoutes[currentStep - 1].link);
    }
  };
  return (
    <div className="flex flex-col gap-2 md:hidden">
      <div className="text-secondary text-sm ">Step {actualStep + 1} of 4</div>

      <div className="w-full h-2 border border-[#C9D3E0] rounded-md">
        <div
          className="h-full rounded-md transition-all duration-300"
          style={{
            width: `${((actualStep + 1) / 4) * 100}%`,
            background: "#C9D3E0",
          }}
        />
      </div>

      {actualStep !== 0 && (
        <div className="flex items-center justify-between gap-2 w-full">
          <Button
            variant="ghost"
            size="sm"
            className="text-[12px] flex items-center gap-0.5 text-[#4F637D]"
            disabled={currentStep === 0}
            onClick={previousStep}
          >
            <ChevronLeft className="size-4" />
            Prev
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="text-[12px] flex items-center gap-0.5 text-[#4F637D]"
            onClick={nextStep}
            disabled={currentStep === actualStep}
          >
            Next
            <ChevronRight className="size-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default MobileProgressBar;
