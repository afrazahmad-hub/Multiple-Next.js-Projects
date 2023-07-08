import Head from "next/head";

// Internal Imports

import Wrapper from "@/components/Wrapper";

import Hero from "@/components/Hero";
import Promotions from "@/components/Promotions";
import Products from "@/components/Products";
import Paragraphs from "@/components/Paragraphs";
import Subscription from "@/components/Subscription";

// Data
import { male } from "../Data/data";

export default function Home() {
  return (
    <main>
      <Wrapper>
        <Hero />
        <Promotions />
        <Products />
        <Paragraphs />
        <Subscription />
      </Wrapper>
    </main>
  );
}
