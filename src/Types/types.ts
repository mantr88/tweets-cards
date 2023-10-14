export type User = {
  user: string;
  tweets: number;
  followers: number;
  avatar: string;
  isFollowed: boolean;
  id: string;
};

export type Users = User[];
