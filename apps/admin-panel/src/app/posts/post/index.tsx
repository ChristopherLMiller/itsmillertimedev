import { Book } from "@mui/icons-material";
import { ShowGuesser } from "react-admin";
import { PostCreate } from "./PostCreate";
import { PostEdit } from "./PostEdit";
import { PostList } from "./PostList";

const resource = {
  list: PostList,
  edit: PostEdit,
  create: PostCreate,
  show: ShowGuesser,
  icon: Book,
  options: { label: "Posts" },
  recordRepresentation: (record: any) => record.slug,
};

export default resource;
