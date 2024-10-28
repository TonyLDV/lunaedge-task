import React from "react";
import Card from "@/components/card/card";
import LoginForm from "@/components/card/_components/login-form";

const LoginPage = () => {
  return (
    <Card
      title="Welcome back"
      navigation={false}
      className="w-full"
      description="Feeling ready to take on the day? Chad is too!"
    >
      <LoginForm />
    </Card>
  );
};

export default LoginPage;
