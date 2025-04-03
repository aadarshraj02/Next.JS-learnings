"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  console.log(router);

  const navigate = (page: string) => {
    router.push(`${page}`);
  };

  return (
    <div>
      <button onClick={() => navigate("/login")} className="cursor-pointer">
        Go To the Login Page
      </button>
      <br />
      <Link href={"/colors"}>Go to colors page</Link>
    </div>
  );
};
export default Home;
