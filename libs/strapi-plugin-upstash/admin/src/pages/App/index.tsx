/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import { AnErrorOccurred } from "@strapi/helper-plugin";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "react-router-dom";
import pluginId from "../../pluginId";
import HomePage from "../HomePage";
import RedisViewPage from "../RedisViewPage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
        <Route
          path={`/plugins/${pluginId}/redis/:key`}
          component={RedisViewPage}
        />
        <Route component={AnErrorOccurred} />
      </Switch>
    </QueryClientProvider>
  );
};

export default App;
