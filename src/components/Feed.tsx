import Post from "./Post";
import { DUMMY_POSTS } from "@/testData/dummyPosts";

export default function Feed() {
  return (
    <div className="mr-40">
      {DUMMY_POSTS.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}
