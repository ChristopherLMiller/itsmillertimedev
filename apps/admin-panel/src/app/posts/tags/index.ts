import { EditGuesser, ShowGuesser } from "react-admin";
import { PostTagsEdit } from "./PostTagsEdit";
import { PostTagsList } from "./PostTagsList";

const resource = {
  list: PostTagsList,
  edit: PostTagsEdit,
  create: EditGuesser,
  show: ShowGuesser,
  options: {
    label: "Post Tags",
  },
  recordRepresentation: (record: any) => record.slug,
};

export default resource;
