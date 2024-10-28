"use client";
import { useChadContext } from "@/store/context";
import { redirect } from "next/navigation";
import React from "react";

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useChadContext();

  if (!isLoggedIn) {
    redirect("/login");
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      {children}
    </div>
  );
};

export default StoreLayout;
