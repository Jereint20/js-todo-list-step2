const BASE_URL = 'https://js-todo-list-9ca3a.df.r.appspot.com';

export const POST_USER_URL = () => `${BASE_URL}/api/users`;

export const GET_USER_LIST_URL = () => `${BASE_URL}/api/users`;

export const GET_USER_URL = (id) => `${BASE_URL}/api/users/${id}`;

export const DELETE_USER_URL = (id) => `${BASE_URL}/api/users/${id}`;

export const POST_TODO_URL = (userId) =>
  `${BASE_URL}/api/users/${userId}/items/`;

export const COMPLETE_TODO_URL = (userId, itemId) =>
  `${BASE_URL}/api/users/${userId}/items/${itemId}/toggle`;

export const DELETE_TODO_URL = (userId, itemId) =>
  `${BASE_URL}/api/users/${userId}/items/${itemId}`;

export const EDIT_TODO_URL = (userId, itemId) =>
  `${BASE_URL}/api/users/${userId}/items/${itemId}`;
