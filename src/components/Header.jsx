import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";
import { BriefcaseBusiness, PenBox } from "lucide-react";

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
      setSearch({});
    }
  }, [search]);

  return (
    <div>
      <nav className="py-4 flex justify-around items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold">TalentBridge</h1>
        </Link>

        <div className="flex items-center gap-6">
          <SignedOut>
            <Button
              className="cursor-pointer"
              variant="outline"
              onClick={() => setShowSignIn(true)}
            >
              Login
            </Button>
          </SignedOut>

          <SignedIn>
            <Link to="/post-job">
              <Button className="cursor-pointer" variant="destructive">
                <PenBox size={20} className="mr-2" />
                Post a job
              </Button>
            </Link>

            <Link
              to="/my-jobs"
              className="flex items-center gap-1 text-sm hover:underline"
            >
              <BriefcaseBusiness size={18} />
              My Jobs
            </Link>

            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  avatarImage: "w-10 h-10",
                },
              }}
            />
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
