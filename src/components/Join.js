import React from "react";
import { Button, Card, CardBody, CardHeader, Link } from "@nextui-org/react";

export default function Join() {
  return (
    <div className="mx-auto max-w-screen-sm  md:max-w-screen-md lg:max-w-screen-xl mb-10 flex justify-center items-center p-4 md:p-0">
      <Card className="px-5 xl:px-44 py-16 xl:py-32">
        <CardHeader>
          <h1 className="text-5xl  font-bold pb-4">
            Join the world of Chat Monster today!
          </h1>
        </CardHeader>
        <CardBody>
          <div className="text-center">
            <Button
              as={Link}
              size="lg"
              href="/register"
              className="bg-gradient-to-t from-fuchsia-600 to-pink-600 text-white shadow-lg"
            >
              Explore Now
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
