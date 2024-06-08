import { Comment } from "../Types/Comment";
import { client } from "./wait";

export const getMyComments = () => {
  return client.get<Comment[]>('/comments/mine');
};

export const addComment = (cafeId: number, comment: string) => {
  return client.post<any>(`/comments/${cafeId}`, {comment});
};

export const setScore = (cafeId: number, score: number) => {
  return client.post<any>(`/cafes/scores?cafeId=${cafeId}&score=${score}`);
};

export const getAllComments = () => {
  return client.get<Comment[]>('/comments?page=0&size=1&sort=string');
};
