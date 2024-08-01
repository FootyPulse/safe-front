export const DUMMY_POSTS = [
  {
    id: 1,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    user: {
      username: "coolSupporter123",
      userProfile: "https://github.com/shadcn.png",
    },
    likeCount: 123,
    commentCount: 20,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    likedByCurrentUser: true,
  },
  {
    id: 2,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    user: {
      username: "coolguy$LYF",
      userProfile: "https://github.com/shadcn.png",
    },
    likeCount: 12,
    commentCount: 20,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    likedByCurrentUser: false,
  },
  {
    id: 3,
    content: "Team was terrible today, what a shocking coaching performance",
    user: {
      username: "bombers_supporter1",
      userProfile: undefined,
    },
    likeCount: 12,
    commentCount: 20,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    likedByCurrentUser: true,
  },
  {
    id: 4,
    content: "That was the best game ever ",
    user: {
      username: "supporter",
      userProfile: "https://github.com/shadcn.png",
    },
    likeCount: 12,
    commentCount: 20,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    likedByCurrentUser: false,
  },
];
