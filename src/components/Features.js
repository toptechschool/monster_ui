import React from "react";
import { Card, CardHeader, CardBody, Divider, Chip } from "@nextui-org/react";
import Image from "next/image";
import ChatBot from "../../public/chatBot.png";
export default function Features() {
  return (
    <div className="mx-auto max-w-screen-sm  md:max-w-screen-md lg:max-w-screen-xl my-10 md:my-28 pb-0 md:pb-28">
      <div className="flex flex-col gap-1 mb-6 md:mb-16 p-4 md:p-0">
        <Chip
          size="lg"
          color="primary"
          classNames={{
            base: "px-10 py-7",
            content: "drop-shadow shadow-black text-white text-xl",
          }}
        >
          Advanced Features
        </Chip>
        <p className="pt-5 text-3xl font-bold mt-5">
          All the essentials for crafting your AI chatbot without any coding
          required.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-between p-4 md:p-0">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image src={ChatBot} width={50} alt="Icon of Chat Monster" />
            <div className="flex flex-col">
              <p className="text-lg font-bold">Accurate Answer, Reliable</p>
            </div>
          </CardHeader>
          <Divider />
          <div className="p-5">
            <CardBody>
              <p>
                With features like "Revise answers" and "Confidence score" you
                can be sure your chatbot is giving the right answers.
              </p>
            </CardBody>
          </div>
        </Card>
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image src={ChatBot} width={50} alt="Icon of Chat Monster" />
            <div className="flex flex-col">
              <p className="text-lg font-bold">Lead Generation Engine</p>
            </div>
          </CardHeader>
          <Divider />
          <div className="p-5">
            <CardBody>
              <p>
                Collect leads and gather your customer's data, all while
                providing a personalized experience.
              </p>
            </CardBody>
          </div>
        </Card>
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image src={ChatBot} width={50} alt="Icon of Chat Monster" />
            <div className="flex flex-col">
              <p className="text-lg font-bold">24/7 Service</p>
            </div>
          </CardHeader>
          <Divider />
          <div className="p-5">
            <CardBody>
              <p>
                Get insights into your chatbot’s interactions with your
                customers and use them to improve its performance.
              </p>
            </CardBody>
          </div>
        </Card>
      </div>
    </div>
  );
}
