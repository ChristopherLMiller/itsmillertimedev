/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import { ContentLayout, Layout } from "@strapi/design-system";
import { AnErrorOccurred, LoadingIndicatorPage } from "@strapi/helper-plugin";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import ClockifyContext from "../../contexts/ClockifyContext";
import { ClockifyProvider } from "../../contexts/ClockifyProvider";
import pluginId from "../../pluginId";
import HomePage from "../HomePage";
import WorkspacePage from "../WorkspacePage";

const queryClient = new QueryClient();
const App = () => {
  const { workspaces } = useContext(ClockifyContext);

  return (
    <QueryClientProvider client={queryClient}>
      <ClockifyProvider>
        <Suspense fallback={<LoadingIndicatorPage />}>
          <Layout>
            <ContentLayout>
              <Switch>
                <Route
                  path={`/plugins/${pluginId}`}
                  component={HomePage}
                  exact
                />
                <Route
                  path={`/plugins/${pluginId}/workspaces/:workspaceId`}
                  component={WorkspacePage}
                />
                <Route component={AnErrorOccurred} />
              </Switch>
            </ContentLayout>
          </Layout>
        </Suspense>
      </ClockifyProvider>
    </QueryClientProvider>
  );
};

export default App;
