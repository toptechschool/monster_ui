import React from "react";
import { Chip } from "@nextui-org/react";

export default function UseCase() {
  return (
    <div className="mx-auto max-w-screen-sm  md:max-w-screen-md lg:max-w-screen-xl my-4 md:my-28 pb-4 md:pb-28">
      <div className="flex flex-col gap-1 mb-16 p-4 md:p-0">
        <Chip
          size="lg"
          color="primary"
          classNames={{
            base: "px-10 py-7",
            content: "drop-shadow shadow-black text-white text-xl",
          }}
        >
          Use Cases
        </Chip>
        <p className="pt-5 text-3xl font-bold mt-5">
          Here are some of the ways you can use Chat Monster.
        </p>
      </div>
    </div>
  );
}
