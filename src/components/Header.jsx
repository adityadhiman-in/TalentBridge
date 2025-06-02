import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-4 flex justify-around items-center">
      <nav>
        <Link>
          <h1 className="font-medium">TalentBridge</h1>
        </Link>
        <Link>
          <h1>Jobs</h1>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
