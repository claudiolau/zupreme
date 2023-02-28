"use client";

import { Footer, Header } from "@/components";
import { HomeGrid } from "@/components/HomeGrid";
import { useEffect, useState } from "react";
import Layout from "./layout";

const getFromApiAsync = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const responseJson = await response.json();
  return responseJson.products;
};

export default function Home() {
  const [data, setData] = useState("");
  useEffect(() => {
    async () => {
      const res = await getFromApiAsync();
      console.log(res, "res");
      setData(res);
    };
  }, []);

  return (
    <Layout>
      <Header />
      <HomeGrid />
      <Footer />
    </Layout>
  );
}
