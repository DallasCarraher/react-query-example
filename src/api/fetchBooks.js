import request, { ROOT } from "./index";

export const fetchBooks = async () => {
  const res = (await request(`${ROOT}/book`)).json();
  const { docs, page, pages, total } = await res;
  const transformation = { docs, page, pages, total };
  return transformation;
};
