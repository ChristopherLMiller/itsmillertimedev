export const dataFetcher = async (
  path: string,
  method: "GET" | "POST" | "UPDATE" | "DETELE" | "HEAD",
  data?: any
) => {
  const url = `https://api.clockify.me/api/v1${path}`;
  const response = await fetch(url, {
    method,
    headers: {
      "X-Api-Key": process.env.CLOCKIFY_API_KEY as string,
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  });
  return response.json();
};
