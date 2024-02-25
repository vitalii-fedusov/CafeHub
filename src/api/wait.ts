/* eslint-disable @typescript-eslint/no-explicit-any */
// const BASE_URL = 'https://mate.academy/students-api';
const BASE_URL = "https://762d-178-213-6-199.ngrok-free.app";

export function wait(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

type RequestMethod = "GET" | "POST" | "PATCH" | "DELETE";

function request<T>(
  url: string,
  method: RequestMethod = "GET",
  data: any = null
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    if (method !== 'GET') {
      options.body = JSON.stringify(data);

      options.headers = {
        'ngrok-skip-browser-warning': '1234',
        "Content-Type": "application/json; charset=UTF-8",
      };
    } else {
      options.headers = {
        'ngrok-skip-browser-warning': '1234',
        // "Content-Type": "application/json; charset=UTF-8",
      };
    }
  }

  return wait(300)
    .then(() => fetch(BASE_URL + url, options))
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

export const client = {
  get: <T>(url: string, data: any) => request<T>(url, 'GET', data),
  post: <T>(url: string, data: any) => request<T>(url, "POST", data),
  patch: <T>(url: string, data: any) => request<T>(url, "PATCH", data),
  delete: (url: string) => request(url, "DELETE"),
};
