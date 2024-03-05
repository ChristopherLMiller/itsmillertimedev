import { GetListParams, GetListResult } from "react-admin";

const apiURL =
  process.env.NODE_ENV !== "development"
    ? import.meta.env.VITE_API_URL_LOCAL
    : import.meta.env.VITE_API_URL_LIVE;

const fetchData = (
  input: string | URL | Request,
  init?: any,
): Promise<Response> => {
  const headers = new Headers();
  headers.append("x-api-key", import.meta.env.VITE_API_KEY);
  return fetch(input, { headers });
};

export default {
  getList: async (
    resource: string,
    params: GetListParams,
  ): Promise<GetListResult> => {
    const {
      pagination: { page, perPage },
      sort,
      filter,
    } = params;
    const orderBy = { [sort.field]: sort.order.toLowerCase() };
    const url = `${apiURL}/${resource}?take=${perPage}&skip=${
      (page - 1) * perPage
    }&orderBy=${JSON.stringify(orderBy)}`;
    const response = await fetchData(url);
    const { data, meta } = await response.json();
    return { data, total: meta.total };
  },
  getOne: async (resource: string, params: any) => {
    const url = `${apiURL}/${resource}/${params.id}`;
    const response = await fetch(url);
    const { data, meta } = await response.json();
    return { data, meta };
  },
  getMany: async (resource: string, params: any) => {
    const url = `${apiURL}/${resource}`;
    const response = await fetch(url);
    const { data } = await response.json();
    console.log({ data });
    return { data };
  },
  getManyReference: async (resource, params) => {
    return { data: [], total: 0 };
  },
  create: async (resource, params) => {
    const url = `${apiURL}/${resource}`;
    const response = await fetch(url);
    return { data: await response.json() };
  },
  update: async (resource, params) => {
    const url = `${apiURL}/${resource}`;
    const response = await fetch(url);
    return { data: await response.json() };
  },
  updateMany: async (resource, params) => {
    const url = `${apiURL}/${resource}`;
    const response = await fetch(url);
    return { data: await response.json() };
  },
  delete: async (resource, params) => {
    const url = `${apiURL}/${resource}`;
    const response = await fetch(url);
    return { data: await response.json() };
  },
  deleteMany: async (resource, params) => {
    const url = `${apiURL}/${resource}`;
    const response = await fetch(url);
    return { data: await response.json() };
  },
};
