"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import MobileProgressBar from "../mobile-progress-bar";

type CardProps = {
  title: string;
  logo?: boolean;
  description: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  navigation?: boolean;
};

const Card = ({
  logo = true,
  title,
  description,
  children,
  icon,
  className,
  navigation = true,
}: CardProps) => {
  return (
    <div
      className={cn(
        "shadow-none md:shadow-2xl p-4 md:pt-16 md:pb-[75px] px-8 md:px-10 rounded-sm flex flex-col text-primary lg:w-[480px] gap-8 bg-white",
        className
      )}
    >
      {icon && <>{icon}</>}

      {logo && (
        <h1 className="text-4xl font-bold flex items-center gap-2">
          <Image src="/logo.png" alt="Chad" width={32} height={32} />
          <p>Chad</p>
        </h1>
      )}
      {navigation && <MobileProgressBar />}

      <p className="text-2xl font-bold">{title}</p>
      <p className="text-secondary">{description}</p>

      {children}
    </div>
  );
};

export default Card;
