import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";
import {
  CarouselItem,
  Carousel,
  CarouselContent,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

      <section>
        <h1 className="text-center text-4xl font-bold pt-10 pb-10">
          Top Recruiters{" "}
        </h1>
        <Carousel
          plugins={[Autoplay({ delay: 2000, stopOnInteraction: true })]}
          className="w-full py-10"
        >
          <CarouselContent>
            {companies.map(({ name, id, path }) => {
              return (
                <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
                  <img
                    src={path}
                    alt={name}
                    className="h-9 sm:h-14 object-contain mx-auto"
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </section>
      <img className="p-10 rounded-4xl" src="/images/Banner.png"></img>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 p-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">For the Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Search and apply for jobs and track application and more</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">For Companies</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Post Jobs, and Hire Talent and manage the candidates</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default LandingPage;
