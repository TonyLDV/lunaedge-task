"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import Card from "@/components/card/card";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useChadContext } from "@/store/context";

const options = [
  {
    id: 0,
    title: "Contextual responses",
    subtitle:
      "Custom responses to any support situation from “where’s my stuff?” to “I want a refund”",
  },
  {
    id: 1,
    title: "Reply from anywhere",
    subtitle:
      "Respond to your customers via email or Chad chat—it’s all saved in the same thread",
  },
  {
    id: 2,
    title: "Categorical inbox tags",
    subtitle:
      "Tags your emails by category so you know what to expect before even opening an email",
  },
];

const ConnectEmailPage = () => {
  const { updateChadData } = useChadContext();
  const router = useRouter();

  const handleConnect = () => {
    updateChadData({ customerSupportEmail: "test@test.com" });
    router.push("/sign-up/connect-email/connected");
  };

  return (
    <Card
      title="Connect your customer support email"
      description="Allows Chad to send automated responses on your behalf from your usual support mailbox."
    >
      <div className="flex flex-col gap-8">
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
          <Button
            className="w-full h-fit rounded-[2px] p-1 flex items-center"
            onClick={handleConnect}
          >
            <div className="bg-white size-12 flex items-center justify-center mr-4">
              <Image src="/google.png" alt="Gmail" width={24} height={24} />
            </div>

            <p className="flex-1 text-center pr-12">Connect Gmail account</p>
          </Button>

          <Button variant="link" className="text-xs">
            <Link href="/sign-up/connect-email/alternative">
              I don&apos;t use Gmail
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ConnectEmailPage;
