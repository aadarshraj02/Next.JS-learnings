"use client";

import Link from "next/link";
import { useState } from "react";

const Layout = () => {
  const [name, setName] = useState("");

  return (
    <div className="m-10">
      <input
        type="text"
        value={name}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <Link href={"/analytics/revenue"}>Revenue</Link>
      <br />
      <Link href={"/analytics/stats"}>Stats</Link>
    </div>
  );
};
export default Layout;
