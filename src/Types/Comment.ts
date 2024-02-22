import { User } from "./User";

export type Comment = {
  id: number;
  time: string;
  user: User;
  comment: string;
};
