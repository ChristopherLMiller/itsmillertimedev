import { ContentLayout } from "@strapi/design-system";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
const RedisViewPage = () => {
  const { key } = useParams();
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["redis_keys"],
    queryFn: async () => {
      const response = await fetch(`/upstash/${key}`);
      if (!response.ok) {
        throw new Error("Unable to fetch upstash redis data");
      }
      return response.json();
    },
    refetchInterval: 5000,
  });
  return <ContentLayout>Test</ContentLayout>;
};

export default RedisViewPage;
