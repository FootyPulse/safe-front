import HomeNav from "@/components/home/HomeNav";
import FilterPostsNav from "@/components/home/FilterPostsNav";
import GamesCarousel from "@/components/GamesCarousel";
import Feed from "@/components/Feed";

export default function Home() {
  return (
    <div className="p-4 items-start justify-center flex">
      <HomeNav />
      <div>
        <FilterPostsNav />
        <Feed />
      </div>
      <GamesCarousel />
    </div>
  );
}
