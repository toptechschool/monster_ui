import React from "react";
import Image from "next/image";
import HeroImage from "../../public/hero.jpg";
import { Button } from "@nextui-org/react";
import { ArrowRightIcon, ChevronRight, Video } from "lucide-react";

export default function Hero() {
  const imageStyle = {
    borderRadius: "50%",
    border: "1px solid black",
    transition: "transform 0.3s ease",
  };

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4  mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mt-5 md:mt-20 lg:mt-22 pb-0 md:pb-28 px-4 md:px-0">
      <div className="flex-1">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
            Experience
            <br />
            Customized ChatBot
            <br />
            For Your Website
          </h1>
          <p className="text-lg leading-8">
            Make a custom AI based Chat Bot
            <br />
            Based on principles similar to ChatGPT
            <br />
            But customized to specific tasks like
            <br />
            Customer support, lead generation, and user engagement etc.
          </p>
          <div className="flex flex-col md:flex-row gap-4 pt-2">
            <Button size="lg" color="primary" href="#" className="shadow-lg">
              Create your Chat Monster
              <ChevronRight size={18} />
            </Button>

            <Button
              size="lg"
              color="primary"
              href="#"
              className="rounded-xl bg-[#998973] px-4 py-auto  text-sm font-semibold shadow-sm"
            >
              Watch a Demo Video <Video />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Image
          priority="true"
          unoptimized="false"
          style={imageStyle}
          width={800}
          src={HeroImage}
          alt="Chat Monster Hero Image"
        />
      </div>
    </div>
  );
}
