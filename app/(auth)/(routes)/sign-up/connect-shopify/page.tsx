"use client";

import Card from "@/components/card/card";
import { Button } from "@/components/ui/button";
import { useChadContext } from "@/store/context";
import { Check } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const options = [
  {
    id: 0,
    title: "Track orders and shipping",
    subtitle: "Global coverage with 600+ couriers supported",
  },
  {
    id: 1,
    title: "Manage orders",
    subtitle:
      "Allow customers to track, return, exchange, or report problems with their orders",
  },
  {
    id: 2,
    title: "Process returns and exchanges",
    subtitle:
      "Automatically checks your store policy and existing inventory before resolving or escalating each request",
  },
];

const ConnectShopifyPage = () => {
  const { updateChadData } = useChadContext();
  const router = useRouter();

  const handleConnect = () => {
    updateChadData({ store: "shopify" });
    router.push("/sign-up/connect-shopify/submit");
  };

  return (
    <Card
      title="Connect your Shopify store"
      description="Installs the Chad widget in your Shopify store and sets it up to display your customers’ order information and self-serve options.."
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 rounded-[8px] bg-[#F8F9FC] md:bg-white p-4 md:p-0">
          {options.map((option) => (
            <div
              key={option.id}
              className="flex items-start justify-start gap-2"
            >
              <Check className="size-6 text-[#65BD47]" />

              <div className="flex flex-col justify-start gap-1">
                <p className="text-[16px] font-medium text-[#134267]">
                  {option.title}
                </p>

                <p className="text-[14px] text-[#4F637D]">{option.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-2">
          <Button className="w-full" onClick={handleConnect}>
            Connect store
          </Button>

          <Button variant="link" className="text-xs">
            <Link href="/sign-up/connect-shopify/alternative">
              I don&apos;t use Shopify
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ConnectShopifyPage;
