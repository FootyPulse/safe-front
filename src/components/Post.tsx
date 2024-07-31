import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getFirstAndLastChar } from "@/utils/getFirstAndLastChar";

import { FaHeart, FaCommentAlt, FaShareAlt } from "react-icons/fa";

export default function Post(props: FootyPulse.PostProps) {
  const {
    content,
    user,
    likeCount,
    commentCount,
    createdAt,
    likedByCurrentUser,
  } = props;
  return (
    <div className=" w-[800px] bg-slate-700 text-white p-4 border">
      <div>
        <div className="flex items-center">
          <Avatar className="mr-2">
            <AvatarImage src={user.userProfile} alt="@shadcn" />
            <AvatarFallback className="text-black">
              {getFirstAndLastChar(user.username)}
            </AvatarFallback>
          </Avatar>
          <h2 className="mr-2 text-lg text-slate-">{user.username}</h2>
          <p className="text-slate-500">
            Posted: {new Date(createdAt).toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-white mt-3">{content}</p>
        </div>
      </div>
      <div>
        <div className="flex items-center mt-6">
          <p className="mr-2">{likeCount}</p>
          <FaHeart
            className={`mr-2 ${
              likedByCurrentUser ? "text-red-700" : "text-white"
            }`}
          />
          <p className="mr-2">{commentCount}</p>
          <FaCommentAlt className="mr-4" />
          <FaShareAlt />
        </div>
      </div>
    </div>
  );
}
