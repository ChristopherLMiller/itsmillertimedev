/*
 *
 * HomePage
 *
 */

import {
  Avatar,
  BaseHeaderLayout,
  Box,
  Button,
  ContentLayout,
  EmptyStateLayout,
  Link,
  Loader,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Typography,
} from "@strapi/design-system";
import { Plus } from "@strapi/icons";
import { useContext } from "react";
import ClockifyContext from "../../contexts/ClockifyContext";
import pluginId from "../../pluginId";

const HomePage = () => {
  const { workspaces, isLoading } = useContext(ClockifyContext);
  console.log(workspaces);

  return (
    <Box background="neutral100">
      <BaseHeaderLayout
        primaryAction={<Button startIcon={<Plus />}>Add workspace</Button>}
        title="Clockify Workspaces"
        subtitle={`${workspaces?.length} entries found`}
        as="h2"
      ></BaseHeaderLayout>
      {isLoading && <Loader />}
      {!isLoading && workspaces.length < 1 && (
        <EmptyStateLayout content="You don't have any content yet..." />
      )}
      {!isLoading && workspaces.length && (
        <ContentLayout>
          <Table>
            <Thead>
              <Tr>
                <Th>
                  <Typography textColor="neutral800">Cover</Typography>
                </Th>
                <Th>
                  <Typography textColor="neutral800">Workspace</Typography>
                </Th>
                <Th>
                  <Typography textColor="neutral800">Users</Typography>
                </Th>
                <Th>
                  <Typography textColor="neutral800">Clients</Typography>
                </Th>
                <Th>
                  <Typography textColor="neutral800">Projects</Typography>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {!isLoading &&
                workspaces.map((workspace) => (
                  <Tr key={workspace.id}>
                    <Td>
                      <Avatar src={workspace.imageURL} />
                    </Td>
                    <Td>
                      <Typography textColor="neutral800">
                        {workspace.name}
                      </Typography>
                    </Td>
                    <Td>
                      <Link
                        to={`/plugins/${pluginId}/workspaces/${workspace.id}/users`}
                      >
                        View {workspace.memberships.length} user(s)
                      </Link>
                    </Td>
                    <Td>
                      <Link
                        to={`/plugins/${pluginId}/workspaces/${workspace.id}/clients`}
                      >
                        View Clients
                      </Link>
                    </Td>
                    <Td>
                      <Link
                        to={`/plugins/${pluginId}/workspaces/${workspace.id}/projects`}
                      >
                        View {workspace.projects.length} Project(s)
                      </Link>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </ContentLayout>
      )}
    </Box>
  );
};

export default HomePage;
