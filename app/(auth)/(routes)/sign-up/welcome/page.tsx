import SignUpForm from "@/components/card/_components/sign-up-form";
import Card from "@/components/card/card";
import React from "react";

const WelcomePage = () => {
  return (
    <div>
      <Card
        title="Welcome to Chad"
        description="Go live in 10 minutes! Our self-service widget empowers your customers
        to manage orders and track shipments 24/7 without driving you crazy."
      >
        <SignUpForm />
      </Card>
    </div>
  );
};

export default WelcomePage;
