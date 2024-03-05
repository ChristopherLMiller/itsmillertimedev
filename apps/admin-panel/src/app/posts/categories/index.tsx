import { Book } from "@mui/icons-material";
import { ShowGuesser } from "react-admin";
import { PostCategoryCreate } from "./create";
import { PostCategoryEdit } from "./edit";
import { PostCategoryList } from "./list";

const resource = {
  list: PostCategoryList,
  edit: PostCategoryEdit,
  create: PostCategoryCreate,
  show: ShowGuesser,
  icon: Book,
  options: { label: "Post Categories" },
  recordRepresentation: (record: any) => record.slug,
};

export default resource;
