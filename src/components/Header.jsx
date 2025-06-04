import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  return (
    <div>
      <nav className="py-4 flex justify-around items-center">
        <Link>
          <h1 className="text-2xl font-bold">TalentBridge</h1>
        </Link>
        <Link>
          <Button className="cursor-pointer" variant="outline" size="lg">
            Login
          </Button>
        </Link>
        {/* 
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn> */}
      </nav>
    </div>
  );
};

export default Header;
