"use client";
import { use, useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<{ data: string } | null>(null);
  useEffect(() => {
    fetch("api/coffee")
      .then((data) => data.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);
  return <div>{data?.data}</div>;
}
