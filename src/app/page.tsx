"use client";

import { Footer, Header } from "@/components";
import { HomeGrid } from "@/components/HomeGrid";
import { getFromItem } from "@/service/getItem";
import { useEffect, useState } from "react";
import Layout from "./layout";

export default function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await getFromItem();
      setData(res);
    };
    getData();
  }, []);

  return (
    <Layout>
      <Header />
      <HomeGrid />
      <Footer />
    </Layout>
  );
}
