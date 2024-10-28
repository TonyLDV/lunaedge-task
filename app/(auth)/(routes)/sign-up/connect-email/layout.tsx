"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useChadContext } from "@/store/context";
import { useCurrentPath } from "@/hooks/use-current-path";

const ConnectEmailLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { activePath } = useCurrentPath();
  const { actualStep } = useChadContext();

  useEffect(() => {
    if (actualStep < 2) {
      router.push("/sign-up/welcome");
    } else if (activePath < actualStep) {
      router.push("/sign-up/connect-email/connected");
    }
  }, [actualStep, activePath, router]);

  return <div>{children}</div>;
};

export default ConnectEmailLayout;
