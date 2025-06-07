import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";
import { PenBox } from "lucide-react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
    }
  };
  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  });

  return (
    <div>
      <nav className="py-4 flex justify-around items-center">
        <Link>
          <h1 className="text-2xl font-bold">TalentBridge</h1>
        </Link>

        <div className="flex gap-8">
          <SignedOut>
            <Button
              className="cursor-pointer"
              variant="outline"
              onClick={() => {
                setShowSignIn(true);
              }}
            >
              {" "}
              Login
            </Button>
          </SignedOut>
          <SignedIn>
            <Link to="/post-job">
              <Button className="cursor-pointer" variant="destructive">
                <PenBox size={20} className="mr-2"></PenBox>Post a job
              </Button>
            </Link>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
      {showSignIn && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black/70"
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            signUpFallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
