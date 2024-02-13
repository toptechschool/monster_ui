import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  User,
} from "@nextui-org/react";
import Image from "next/image";
import ChatBot from "../../public/chatBot.png";

export default function UserReview() {
  return (
    <div className="mx-auto max-w-screen-xl mb-10 md:mb-40">
      <div className="flex flex-col gap-4 mb-4 md:mb-16 p-4 md:p-0">
        <Chip
          size="lg"
          variant="shadow"
          classNames={{
            base: "bg-gradient-to-t from-fuchsia-600 to-pink-600 border-white/50 shadow-pink-500/30 px-10 py-7",
            content: "drop-shadow shadow-black text-white text-xl",
          }}
        >
          User Reviews
        </Chip>
        <p className="pt-5 text-3xl font-bold mt-5">
          Checkout what people says about us.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 p-4 md:p-0 justify-center">
        <Card>
          <div className="m-4">
            <CardHeader>
              <User
                name="Jane Doe"
                description="Product Designer"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
              />
            </CardHeader>
          </div>
          <CardBody>
            <p className="mx-4 mb-6">
              “Website embed works like a charm even with non-English content!”
            </p>
          </CardBody>
        </Card>

        <Card>
          <div className="m-4">
            <CardHeader>
              <User
                name="Jane Doe"
                description="Product Designer"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
              />
            </CardHeader>
          </div>
          <CardBody>
            <p className="mx-4 mb-6">
              “Website embed works like a charm even with non-English content!”
            </p>
          </CardBody>
        </Card>

        <Card>
          <div className="m-4">
            <CardHeader>
              <User
                name="Jane Doe"
                description="Product Designer"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
              />
            </CardHeader>
          </div>
          <CardBody>
            <p className="mx-4 mb-6">
              “Website embed works like a charm even with non-English content!”
            </p>
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-row justify-start p-4 md:p-0 mt-0 lg:mt-4">
        <div className="w-full">
          <Card>
            <div className="m-4">
              <CardHeader>
                <User
                  name="Jane Doe"
                  description="Product Designer"
                  avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                  }}
                />
              </CardHeader>
            </div>
            <CardBody>
              <p className="mx-4 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center p-4 md:p-0 mt-0 lg:mt-4">
        <Card>
          <div className="m-4">
            <CardHeader>
              <User
                name="Jane Doe"
                description="Product Designer"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
              />
            </CardHeader>
          </div>
          <CardBody>
            <p className="mx-2 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
