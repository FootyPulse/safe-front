import HomeNav from "@/components/home/HomeNav";
import GamesCarousel from "@/components/GamesCarousel";
import Feed from "@/components/Feed";

export default function Home() {
  return (
    <div className="p-4 items-start justify-center flex">
      <HomeNav />
      <Feed />
      <GamesCarousel />
    </div>
  );
}
