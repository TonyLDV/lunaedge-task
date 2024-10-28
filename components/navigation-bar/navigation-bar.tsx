"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { navigationRoutes } from "@/lib/routes";
import { useChadContext } from "@/store/context";
import NavigationItem from "./_components/nav-item";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCurrentPath } from "@/hooks/use-current-path";

const NavigationBar = () => {
  const router = useRouter();
  const { actualStep } = useChadContext();
  const { activePath } = useCurrentPath();

  const nextStep = () => {
    if (activePath < navigationRoutes.length - 1) {
      return router.push(navigationRoutes[activePath + 1].link);
    }
  };

  const previousStep = () => {
    if (activePath > 0) {
      return router.push(navigationRoutes[activePath - 1].link);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#0D3251] to-[#19476C] px-[102px] h-full hidden md:flex flex-col items-center justify-between ">
      <div className="flex flex-col gap-12  mt-[200px]">
        <div className="flex flex-col items-center">
          {navigationRoutes.map((step) => (
            <NavigationItem key={step.id} step={step} actualStep={actualStep} />
          ))}
        </div>

        {actualStep !== 0 && (
          <div className="flex items-center justify-between w-full text-[#93A8C1]">
            <Button
              variant="ghost"
              className="flex items-center gap-2"
              onClick={previousStep}
              disabled={activePath === 0}
            >
              <ChevronLeft className="size-4" />
              <p className="text-[16px]">Back</p>
            </Button>

            <Button
              variant="ghost"
              className="flex items-center gap-2"
              onClick={nextStep}
              disabled={activePath === actualStep}
            >
              <p className="text-[16px]">Next</p>
              <ChevronRight className="size-4" />
            </Button>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-4 mb-[56px]">
        <div className="flex items-center rounded-lg gap-4 p-4 bg-[#134267] text-[#96CAF7] w-[364px] z-100">
          <p className="font-bold text-[32px]">5X</p>
          <p className="text-sm">
            Acquiring a new customer is 5x more costly than making an unhappy
            customer happy
          </p>
        </div>

        <div className="flex gap-3">
          {[...Array(5)].map((_, i) => (
            <button
              key={i + ""}
              className={cn(
                "size-2 bg-[#5D7FA3] rounded-full",
                i === 0 && "bg-[#96CAF7]"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
