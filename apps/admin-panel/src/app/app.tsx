import {
  Admin,
  Resource,
  radiantDarkTheme,
  radiantLightTheme,
} from "react-admin";

import apiProvider from "./apiProvider";
import postCategories from "./posts/categories";
import posts from "./posts/post";
import postTags from "./posts/tags";

export const App = () => (
  <Admin
    dataProvider={apiProvider}
    theme={radiantLightTheme}
    darkTheme={radiantDarkTheme}
    defaultTheme="dark"
    title="Its Miller Time Admin"
  >
    <Resource name="posts/posts" {...posts} />
    <Resource name="posts/tags" {...postTags} />
    <Resource name="posts/categories" {...postCategories} />
  </Admin>
);
