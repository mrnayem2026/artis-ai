import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
const Home = () => {
  return (
    <div>
      <h1 className={cn("text-4xl font-bold")}>ArtisAI</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
