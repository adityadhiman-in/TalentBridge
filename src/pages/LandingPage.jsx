import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center text-4xl sm:text-8xl lg:10xl font-extrabold gradient-title tracking-tighter py-4">
          Find Your Dream Job {""} <span>And Get Hired</span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs lg:text-lg">
          Explore Thousands of job listings or find the perfect candidate
        </p>
      </section>
      <section>
        <div className="flex items-center justify-center gap-10">
          <Link to="/jobs">
            <Button className="cursor-pointer" variant="blue" size="xl">
              Find Jobs
            </Button>
          </Link>
          <Link to="/post-job">
            <Button className="cursor-pointer" variant="destructive" size="xl">
              Post Job
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
