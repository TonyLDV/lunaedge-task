"use client";

import React from "react";
import NavigationBar from "@/components/navigation-bar/navigation-bar";

const SignUpLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:w-[1440px] md:h-[900px]">
      <div className="flex w-full h-full justify-between items-center ">
        <NavigationBar />

        <div className="w-full md:h-full flex items-center justify-center bg-none md:bg-bgImage">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SignUpLayout;
