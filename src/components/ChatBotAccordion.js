import React from "react";
import { Accordion, AccordionItem, Chip } from "@nextui-org/react";
import Image from "next/image";
import AccoordionImage from "../../public/accordion.jpg";

export default function ChatBotAccordion() {
  const imageStyle = {
    borderRadius: "10%",
    border: "none",
  };
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="mx-auto max-w-screen-sm  md:max-w-screen-md lg:max-w-screen-xl my-10 md:my-28 pb-0 md:pb-28">
      <div className="flex flex-col gap-1 mb-0 md:mb-16 p-4 md:p-0">
        <Chip
          size="lg"
          color="primary"
          classNames={{
            base: "px-10 py-7",
            content: "drop-shadow shadow-black text-xl",
          }}
        >
          Functionality Queries
        </Chip>

        <p className="pt-5 text-3xl font-bold mt-5">
          Explore the capabilities of Chat Monster system and responding to user
          inputs Effectively.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-center p-4 md:p-0">
        <div>
          <Image
            priority="true"
            unoptimized="false"
            width={600}
            style={imageStyle}
            src={AccoordionImage}
            alt="NextUI hero Image"
          />
        </div>
        <div className="w-full flex items-center">
          <Accordion variant="shadow">
            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="4" aria-label="Accordion 4" title="Accordion 4">
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
