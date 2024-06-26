import { GetListParams, GetListResult } from "react-admin";

const apiURL = import.meta.env.VITE_API_URL_LOCAL;

const fetchData = async (
  input: string | URL | Request,
  init?: any,
): Promise<any> => {
  const headers = new Headers();
  headers.append("x-api-key", import.meta.env.VITE_API_KEY);
  const response = await fetch(input, { headers });
  return response.json();
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
    const urlParams = new URLSearchParams();
    urlParams.append("limit", perPage.toString());
    urlParams.append("skip", ((page - 1) * perPage).toString());
    urlParams.append("orderBy", sort.field);
    urlParams.append("orderDirection", sort.order.toLowerCase());
    urlParams.append("where", JSON.stringify(filter));
    const { data, meta } = await fetchData(
      `${apiURL}/${resource}?${urlParams.toString()}`,
    );
    return { data: data, total: meta.total };
  },
  getOne: async (resource: string, params: any) => {
    const url = `${apiURL}/${resource}/${params.id}`;
    const { data, meta } = await fetchData(url);

    return { data: data[0], meta };
  },
  getMany: async (resource: string, params: any) => {
    const url = `${apiURL}/${resource}`;
    const { data, meta } = await fetchData(url);
    return { data, meta };
  },
  getManyReference: async (resource: string, params: any) => {
    return { data: [], total: 0 };
  },
  create: async (resource: string, params: any) => {
    const url = `${apiURL}/${resource}`;
    const response = await fetch(url, {
      method: "POST",
      body: params,
    });
    return { data: await response.json() };
  },
  update: async (resource: string, params: any) => {
    const url = `${apiURL}/${resource}`;
    const response = await fetch(url);
    return { data: await response.json() };
  },
  updateMany: async (resource: string, params: any) => {
    const url = `${apiURL}/${resource}`;
    const response = await fetch(url);
    return { data: await response.json() };
  },
  delete: async (resource: string, params: any) => {
    const url = `${apiURL}/${resource}`;
    const response = await fetch(url);
    return { data: await response.json() };
  },
  deleteMany: async (resource: string, params: any) => {
    const url = `${apiURL}/${resource}`;
    const response = await fetch(url);
    return { data: await response.json() };
  },
};
