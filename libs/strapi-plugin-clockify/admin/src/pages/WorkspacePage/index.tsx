import {
  BaseHeaderLayout,
  Box,
  Button,
  ContentLayout,
  EmptyStateLayout,
  Link,
  Status,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Typography,
} from "@strapi/design-system";
import { Plus } from "@strapi/icons";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClockifyContext from "../../contexts/ClockifyContext";
import pluginId from "../../pluginId";
import { parseDuration } from "../../utils/parseDuration";
const WorkspacePage = ({ props }) => {
  const { workspaces, isLoading } = useContext(ClockifyContext);
  const [workspace, setWorkspace] = useState({});
  const params = useParams();

  useEffect(() => {
    if (!isLoading) {
      setWorkspace(
        workspaces.find((workspace) => workspace.id === params.workspaceId)
      );
    }
  }, [isLoading, workspaces]);
  return (
    <Box background="neutral100">
      <BaseHeaderLayout
        primaryAction={<Button startIcon={<Plus />}>Add Project</Button>}
        title={`Clockify Workspace - ${workspace.name}`}
        subtitle={`${workspace?.projects?.length} projects found`}
        as="h2"
      ></BaseHeaderLayout>
      {!isLoading && (
        <ContentLayout>
          {workspace?.projects?.length === 0 && (
            <EmptyStateLayout content="You don't have any content yet..." />
          )}
          {workspace?.projects?.length && (
            <Table>
              <Thead>
                <Tr>
                  <Th>
                    <Typography textColor="neutral800">Name</Typography>
                  </Th>
                  <Th>
                    <Typography textColor="neutral800">Client</Typography>
                  </Th>
                  <Th>
                    <Typography textColor="neutral800">Time</Typography>
                  </Th>
                  <Th>
                    <Typography textColor="neutral800">Archived</Typography>
                  </Th>
                  <Th>
                    <Typography textColor="neutral800">Billable</Typography>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {workspace?.projects?.map((project) => (
                  <Tr key={project.id}>
                    <Td>
                      <Typography textColor="neutral800">
                        {project.name}
                      </Typography>
                    </Td>
                    <Td>
                      <Link
                        to={`/plugins/${pluginId}/workspaces/${workspace.id}/clients/${project.clientId}`}
                        textColor="neutral800"
                      >
                        {project.clientName}
                      </Link>
                    </Td>
                    <Td>
                      <Typography textColor="neutral800">
                        {parseDuration(project.duration)}
                      </Typography>
                    </Td>
                    <Td>
                      <Status
                        variant={project.archived ? "alternative" : "success"}
                        size="S"
                        showBullet={false}
                      >
                        <Typography textColor="neutral800" fontWeight="bold">
                          {project.archived ? "Archived" : "Active"}
                        </Typography>
                      </Status>
                    </Td>
                    <Td>
                      <Typography textColor="neutral800">
                        {project.billable ? "Yes" : "No"}
                      </Typography>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
        </ContentLayout>
      )}
    </Box>
  );
};

export default WorkspacePage;
