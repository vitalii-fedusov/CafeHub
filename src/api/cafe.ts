import { Cafe } from '../Types/Cafe';
import { client } from './wait';

export const getCafes = () => {
  // return client.get<Cafe[]>(`/goods`);
  return client.get<Cafe[]>('/cafes', {});
};

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