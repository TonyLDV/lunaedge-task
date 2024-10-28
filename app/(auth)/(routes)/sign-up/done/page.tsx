"use client";

import Card from "@/components/card/card";
import { Button } from "@/components/ui/button";
import { useChadContext } from "@/store/context";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const DonePage = () => {
  const { chadData, actualStep } = useChadContext();

  if (actualStep !== 3) {
    redirect("/sign-up/welcome");
  }

  return (
    <div>
      <Card
        title="You're ready to go! 🚀"
        description="A fully loaded self-service portal is now ready to deploy on your Shopify store. 

We’ve programmed it to follow industry best practices for shipping, return & exchange, and payment policy.

You can customize these settings to fit your store policy anytime.

Lastly, nothing is live until you hit “Go Live”!"
        navigation={false}
        logo={false}
      >
        <div className="flex flex-col gap-2">
          <p>Email: {chadData.email}</p>
          <p>Name: {chadData.name}</p>
          <p>Store: {chadData.store}</p>
          <p>Customer support email: {chadData.customerSupportEmail}</p>
        </div>

        <Button>
          <Link href="/login">Now you can Login</Link>
        </Button>
      </Card>
    </div>
  );
};

export default DonePage;
