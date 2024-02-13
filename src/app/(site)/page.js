"use client";
import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import UseCase from "../../components/UseCase";
import Footer from "../../components/Footer";
import Join from "../../components/Join";
import ChatBotAccordion from "../../components/ChatBotAccordion";
import UserReview from "../../components/UserReview";
import Pricing from "../../components/Pricing";

export default function Home() {
  return (
    <NextUIProvider>
      <ScrollShadow>
        <main className="dark text-foreground bg-background">
          <Nav />
          <Hero />
          <Features />
          <ChatBotAccordion />
          <UseCase />
          <Pricing />
          <UserReview />
          <Join />
          <Footer />
        </main>
      </ScrollShadow>
    </NextUIProvider>
  );
}
