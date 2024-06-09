import { Comment } from "../Types/Comment";
import { client } from "./wait";

export const getMyComments = () => {
  return client.get<Comment[]>('/comments/mine');
};

export const addComment = (cafeId: number, comment: string, score: number) => {
  return client.post<Comment>(`/comments/${cafeId}`, {comment, score});
};

export const getAllComments = () => {
  return client.get<Comment[]>('/comments?page=0&size=1&sort=string');
};
