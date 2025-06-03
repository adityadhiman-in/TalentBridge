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
          <h1 className="font-medium">TalentBridge</h1>
        </Link>
        <Link>
          <Button variant="outline">Login</Button>
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
