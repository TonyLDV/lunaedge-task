"use client";

import React from "react";
import Card from "@/components/card/card";
import { useChadContext } from "@/store/context";
import { redirect } from "next/navigation";

const StorePage = () => {
  const { chadData, isLoggedIn } = useChadContext();

  if (!isLoggedIn) {
    redirect("/login");
  }

  return (
    <Card
      title="Store"
      navigation={false}
      description="Manage your store settings and preferences here."
    >
      Hello Luna Edge, My name is {chadData.name}
    </Card>
  );
};

export default StorePage;
