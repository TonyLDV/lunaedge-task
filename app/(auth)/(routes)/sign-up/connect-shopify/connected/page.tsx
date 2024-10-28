"use client";

import { Check } from "lucide-react";
import Card from "@/components/card/card";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useChadContext } from "@/store/context";

const ConnectedPage = () => {
  const { setActualStep } = useChadContext();
  const router = useRouter();

  const handleSubmit = () => {
    setActualStep(2);
    router.push("/sign-up/connect-email");
  };

  return (
    <Card
      logo={false}
      title="Response received"
      description="Thank you for your interest in Chad! We'll be hard at work building integrations to support your platform."
      className="items-center justify-center text-center p-20"
      navigation={false}
      icon={
        <div className="bg-[#65bd47] flex items-center justify-center rounded-full size-[80px]">
          <Check className="text-white size-[40px]" />
        </div>
      }
    >
      <Button className="w-full" onClick={handleSubmit}>
        Done
      </Button>
    </Card>
  );
};

export default ConnectedPage;
