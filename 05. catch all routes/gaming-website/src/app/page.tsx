import Link from "next/link";

const Home = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Link href="/games" className="text-3xl text-red-700/70">
        Go To games Page
      </Link>
    </div>
  );
};
export default Home;
