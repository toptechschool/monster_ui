import React from "react";
import {
  Chip,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Link,
} from "@nextui-org/react";

export default function Pricing() {
  return (
    <div className="mx-auto max-w-screen-sm  md:max-w-screen-md lg:max-w-screen-xl my-4 md:my-28 pb-4 md:pb-28">
      <div className="flex flex-col gap-1 mb-16 p-4 md:p-0">
        <Chip
          size="lg"
          color="primary"
          classNames={{
            base: "px-10 py-7",
            content: "drop-shadow shadow-black text-xl",
          }}
        >
          Pricing
        </Chip>
        <p className="pt-5 text-3xl font-bold mt-5">Choose Your Plan.</p>
      </div>
      <div className="flex flex-col xl:flex-row gap-4 px-4 xl:px-0 pb-4">
        <div>
          <Card>
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-3xl text-center py-4 font-bold">Starter</p>
                <p className="text-small text-default-500 px-4">
                  Create and embed a custom chatbot on your website or app.
                </p>
                <h2 className="text-3xl text-center p-4">50$</h2>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="p-4">
                <p>One</p>
                <p>One</p>
                <p>One</p>
                <p>One</p>
                <p>One</p>
                <p>One</p>
                <p>One</p>
              </div>
              <div className="text-center pb-5">
                <Button
                  as={Link}
                  size="lg"
                  href="#"
                  color="primary"
                  className="shadow-lg"
                >
                  Buy Now
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-3xl text-center py-4 font-bold">Standard</p>
                <p className="text-small text-default-500 px-4">
                  Create and embed a custom chatbot on your website or app.
                </p>
                <h2 className="text-3xl text-center p-4">100$</h2>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="p-4">
                <p>One</p>
                <p>One</p>
                <p>One</p>
                <p>One</p>
                <p>One</p>
                <p>One</p>
                <p>One</p>
              </div>
              <div className="text-center pb-5">
                <Button
                  as={Link}
                  size="lg"
                  href="#"
                  color="primary"
                  className="shadow-lg"
                >
                  Buy Now
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-3xl text-center py-4 font-bold">Premium</p>
                <p className="text-small text-default-500 px-4">
                  Create and embed a custom chatbot on your website or app.
                </p>
                <h2 className="text-3xl text-center p-4">150$</h2>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="p-4">
                <p>One</p>
                <p>two</p>
                <p>three</p>
                <p>four</p>
                <p>One</p>
                <p>One</p>
                <p>One</p>
              </div>
              <div className="text-center pb-5">
                <Button
                  as={Link}
                  size="lg"
                  href="#"
                  color="primary"
                  className="shadow-lg"
                >
                  Buy Now
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="p-4 xl:p-0">
        <Card>
          <CardHeader>
            <p className="text-3xl text-center py-4 px-4">Custom Plan</p>
          </CardHeader>
          <CardBody>
            <p className="pb-4 px-4">
              Need a plan beyond Scale? Have custom requirements or specific
              features you need? We'd be delighted to find a way to support you.
              Just get in contact!
            </p>
            <div className="p-4">
              <Button
                as={Link}
                color="primary"
                size="lg"
                href="#"
                className="shadow-lg"
              >
                Contact Now
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
