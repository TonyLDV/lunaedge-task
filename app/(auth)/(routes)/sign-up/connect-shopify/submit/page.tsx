"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/card/card";
import { Button } from "@/components/ui/button";

const SubmitPage = () => {
  return (
    <Card
      logo={false}
      title="Store connected"
      description="Chad is now able to manage customer support requests for [STORE-NAME]."
      className="items-center justify-center text-center"
      navigation={false}
      icon={
        <Image
          src="/raccoon-checked.png"
          alt="raccoon-checked"
          width={80}
          height={80}
          className="size-[80px]"
        />
      }
    >
      <div className="flex flex-col items-center justify-between gap-2">
        <Button variant="default" className="w-full" type="submit">
          <Link href="/sign-up/connect-shopify/connected">Submit</Link>
        </Button>
        <div className="flex items-center justify-center text-xs gap-[3px]">
          <p>Wrong store?</p>
          <Button variant="link" className="text-[#32ABF2] text-xs p-0">
            <Link href="/sign-up/connect-shopify">Connect another one</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default SubmitPage;
