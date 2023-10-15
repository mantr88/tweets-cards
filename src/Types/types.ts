export type User = {
  user: string;
  tweets: number;
  followers: number;
  avatar: string;
  isFollowed: boolean;
  id: string;
};

export type Users = User[];

export type FilterInitialState = {
  status: string;
};

export type UsersSliceState = {
  items: Users;
  isLoading: boolean;
  error: null | string;
};

export type State = {
  users: UsersSliceState;
  filter: FilterInitialState;
};

export type StatusFilters = {
  showAll: string;
  follow: string;
  followings: string;
};
