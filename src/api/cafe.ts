import { Cafe } from '../Types/Cafe';
import { client } from './wait';

export const getCafes = () => {
  return client.get<Cafe[]>('/cafes');
};

export const getFilteredCafes = (url: string) => {
  return client.get<Cafe[]>(`/cafes/search?${url}`);
};

export const getCafe = (id: number) => {
  return client.get<Cafe>(`/cafes/${id}`);
};

// export const getCafes = (url: string) => {
//   if (!url) {
//     return client.get<Cafe[]>('/cafes');
//   }

//   return client.get<Cafe[]>(`/cafes/${url}`);
// };

// export const createTodo = ({ userId, title, completed }: Omit<Todo, 'id'>) => {
//   return client.post<Todo>('/todos', { userId, title, completed });
// };

// export const deleteTodo = (id: number) => {
//   return client.delete(`/todos/${id}`);
// };

// export const updateTodo = ({
//   id, userId, title, completed,
// }: Todo) => {
//   return client.patch<Todo>(`/todos/${id}`, { userId, title, completed });
// };

// export const getUser = (email: string) => {
//   return client.get<User[]>(`/users?email=${email}`);
// };

// export const createUser = ({
//   name, username, email, phone,
// }: Omit<User, 'id'>) => {
//   return client.post<User>('/users', {
//     name, username, email, phone,
//   });
// };
