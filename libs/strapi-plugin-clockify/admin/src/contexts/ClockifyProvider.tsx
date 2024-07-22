import React, { useEffect, useState } from "react";
import ClockifyContext from "./ClockifyContext";

export const ClockifyProvider = ({
  children,
}: React.PropsWithChildren<any>) => {
  const [isLoading, setIsLoading] = useState(true);
  const [workspaces, setWorkspaces] = useState();
  useEffect(() => {
    async function fetchInitialData() {
      const response = await fetch("/api/clockify/workspaces");
      const workspaces = await response.json();

      // now with the workspaces, lets fetch the projects on them
      const promises = workspaces.map(async (workspace) => {
        const response = await fetch(`/api/clockify/projects/${workspace.id}`);
        const projects = await response.json();
        return { ...workspace, projects };
      });

      const workspacesProjects = await Promise.all(promises);
      setWorkspaces(workspacesProjects);
      setIsLoading(false);
    }

    fetchInitialData();
  }, []);

  return (
    <ClockifyContext.Provider value={{ isLoading, workspaces }}>
      {children}
    </ClockifyContext.Provider>
  );
};
