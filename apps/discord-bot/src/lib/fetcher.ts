import { fetcher } from 'itty-fetcher';

export const backendAPI = fetcher({
  base: 'http://localhost:3000/api',
  headers: { 'x-api-key': process.env.API_KEY },
});
