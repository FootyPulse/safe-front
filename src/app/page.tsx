import HomeNav from "@/components/home/HomeNav";
import GamesCarousel from "@/components/home/GamesCarousel";
import Feed from "@/components/home/Feed";

export default function Home() {
  return (
    <div className="p-4 items-center justify-center flex">
      <HomeNav />
      <Feed />
      <GamesCarousel />
    </div>
  );
}
