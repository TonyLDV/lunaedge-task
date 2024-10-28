"use client";

import Link from "next/link";
import { useState } from "react";
import Card from "@/components/card/card";
import { useRouter } from "next/navigation";
import { storePlatforms } from "@/lib/routes";
import { Button } from "@/components/ui/button";
import { useChadContext } from "@/store/context";

const AlternativePage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");
  const { updateChadData } = useChadContext();
  const router = useRouter();

  const handleSubmit = () => {
    updateChadData({ store: selectedPlatform });
    router.push("/sign-up/connect-shopify/connected");
  };

  return (
    <Card
      title="Don't use Shopify"
      navigation={false}
      description="Chad Beta is currently only available on Shopify. We’ll send you an email when Chad becomes available on your platform."
    >
      <select
        className="p-2 rounded-md outline-none focus:outline-none h-11 bg-[#F8F9FC]"
        onChange={(e) => setSelectedPlatform(e.target.value)}
        value={selectedPlatform}
      >
        <option value="" disabled hidden aria-disabled>
          Platform
        </option>

        {storePlatforms.map((platform) => (
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
          disabled={!selectedPlatform}
          onClick={handleSubmit}
        >
          Submit
        </Button>

        <div className="flex items-center justify-center text-xs gap-[3px]">
          <p>Actually use Shopify?</p>
          <Button variant="link" className="text-[#32ABF2] text-xs p-0">
            <Link href="/sign-up/connect-shopify">Connect</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AlternativePage;
