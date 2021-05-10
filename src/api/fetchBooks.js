import request, { ROOT } from "./fetchWrapper";

export const fetchBooks = async () => {
  const res = (await request(`${ROOT}/book`)).json();
  const { docs, page, pages, total } = res;
  const transformation = { docs, page, pages, total };
  return transformation;
};
