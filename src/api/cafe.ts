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
