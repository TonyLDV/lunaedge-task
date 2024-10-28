"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useChadContext } from "@/store/context";
import { useCurrentPath } from "@/hooks/use-current-path";

const ConnectShopifyLayout = ({ children }: { children: React.ReactNode }) => {
  const { activePath } = useCurrentPath();
  const { actualStep } = useChadContext();
  const router = useRouter();

  useEffect(() => {
    if (actualStep < 1) {
      router.push("/sign-up/welcome");
    } else if (activePath < actualStep) {
      router.push("/sign-up/connect-shopify/connected");
    }
  }, [actualStep, activePath, router]);

  return <div>{children}</div>;
};

export default ConnectShopifyLayout;
