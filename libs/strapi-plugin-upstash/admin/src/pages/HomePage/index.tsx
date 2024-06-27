/*
 *
 * HomePage
 *
 */

import {
  BaseHeaderLayout,
  Button,
  ContentLayout,
  Flex,
  IconButton,
  Link,
  Main,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Typography,
} from "@strapi/design-system";
import { EmptyBodyTable, LoadingIndicatorPage } from "@strapi/helper-plugin";
import { Plus, Refresh, Trash } from "@strapi/icons";
import { useQuery } from "@tanstack/react-query";
import pluginId from "../../pluginId";

const HomePage = () => {
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["redis_keys"],
    queryFn: async () => {
      const response = await fetch("/upstash");
      if (!response.ok) {
        throw new Error("Unable to fetch upstash redis data");
      }
      return response.json();
    },
    refetchInterval: 5000,
  });

  if (isLoading) return <LoadingIndicatorPage />;

  return (
    <Main>
      <BaseHeaderLayout
        title="Upstash"
        subtitle="Redis Store, Kafka, Vector, QStash"
        as="h2"
      ></BaseHeaderLayout>

      <ContentLayout>
        <Flex justifyContent="space-between" alignItems="center" padding={2}>
          <Typography variant="alpha">Redis</Typography>
          <Flex gap={1} padding={2}>
            <Button startIcon={<Refresh />} onClick={() => refetch()}>
              Refresh
            </Button>
            <Button variant="danger-light" startIcon={<Trash />}>
              Purge
            </Button>
          </Flex>
        </Flex>
        <Table>
          <Thead>
            <Tr>
              <Th>
                <Typography textColor="neutral800">Key</Typography>
              </Th>
              <Th>
                <Typography textColor="neutral800">Time-to-Live</Typography>
              </Th>
              <Th>
                <Typography textColor="neutral800">Memory (bytes)</Typography>
              </Th>
              <Th>
                <Typography textColor="neutral800">Value</Typography>
              </Th>
              <Th>
                <Typography textColor="neutral800">Actions</Typography>
              </Th>
            </Tr>
          </Thead>
          {data.data.length === 0 && <EmptyBodyTable colSpan={5} />}
          <Tbody>
            {data.data.map((key, index) => (
              <Tr key={index}>
                <Td>
                  <Typography textColor="neutral800">{`${key.key.substr(
                    0,
                    50
                  )}...`}</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">{key.ttl}s</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">~{key.size}b</Typography>
                </Td>
                <Td>
                  <Link
                    to={`/plugins/${pluginId}/redis/${encodeURIComponent(
                      key.key
                    )}`}
                  >
                    View
                  </Link>
                </Td>
                <Td>
                  <Flex gap={1} padding={2}>
                    <Button
                      startIcon={<Plus />}
                      onClick={() =>
                        fetch(
                          `/plugins/${pluginId}/redis/${encodeURIComponent(
                            key.key
                          )}`
                        )
                      }
                      variant="secondary"
                    >
                      30 seconds
                    </Button>
                    <Button
                      startIcon={<Plus />}
                      onClick={() =>
                        fetch(`/plugins/${pluginId}/redis/${key.key}`)
                      }
                      variant="secondary"
                    >
                      30 minutes
                    </Button>
                    <IconButton
                      onClick={() => fetch(`/upstash/${key.key}`)}
                      label="Delete key"
                      icon={<Trash />}
                    />
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </ContentLayout>
    </Main>
  );
};

export default HomePage;
