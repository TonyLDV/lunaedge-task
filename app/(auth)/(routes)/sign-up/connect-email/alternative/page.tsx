"use client";

import Link from "next/link";
import React, { useState } from "react";
import Card from "@/components/card/card";
import { useRouter } from "next/navigation";
import { emailPlatforms } from "@/lib/routes";
import { Button } from "@/components/ui/button";
import { useChadContext } from "@/store/context";

const AlternativePage = () => {
  const router = useRouter();
  const { updateChadData } = useChadContext();
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");

  const handleSubmit = () => {
    updateChadData({ customerSupportEmail: selectedPlatform });
    router.push("/sign-up/connect-email/connected");
  };

  return (
    <Card
      title="Don't use Gmail?"
      description="Chad Beta is currently only integrated with Gmail. We’ll send you an email when Chad becomes compatible with your support ticket platform."
    >
      <select
        className="p-2 rounded-md outline-none focus:outline-none h-11 bg-[#F8F9FC]"
        onChange={(e) => setSelectedPlatform(e.target.value)}
        value={selectedPlatform}
      >
        <option value="" disabled hidden aria-disabled>
          Platform
        </option>

        {emailPlatforms.map((platform) => (
          <option key={platform.id} value={platform.id}>
            {platform.name}
          </option>
        ))}
      </select>
      <div className="flex flex-col items-center justify-between gap-2">
        <Button
          variant="default"
          className="w-full"
          type="submit"
          onClick={handleSubmit}
          disabled={!selectedPlatform}
        >
          Submit
        </Button>
        <div className="flex items-center justify-center text-xs gap-[3px]">
          <p>Actually use Gmail?</p>
          <Button variant="link" className="text-[#32ABF2] text-xs p-0">
            <Link href="/sign-up/connect-email">Connect</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AlternativePage;
