import { client } from "./wait";

export const uploadImage = (imageFile: any) => {
  return client.post<any>("/users/profilePicture", {imageFile});
};
