declare namespace FootyPulse {
  type PostProps = {
    id: number;
    content: string;
    user: {
      username: string;
      userProfile: string | null;
    };
    likeCount: number;
    commentCount: number;
    createdAt: string | Date | number;
    updatedAt: string | Date | number;
    likedByCurrentUser: boolean;
  };
}
