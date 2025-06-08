import { useUser } from "@clerk/clerk-react";
import React from "react";
import { BarLoader } from "react-spinners";

const Onboarding = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <BarLoader className=" mb-4" width={"100%"} color="blue" />;
  }

  return (
    <div>
      <h1>Onboarding</h1>
    </div>
  );
};

export default Onboarding;
