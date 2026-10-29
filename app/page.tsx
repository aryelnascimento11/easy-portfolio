'use client'

import Image from "next/image";
import Header from "./components/header";
import Banner from "./components/banner";
import Card from "./components/card";

export default function Home() {
  return (
    <>
    <Header />
    <Banner />
    <Card />
    </>
  );
}
