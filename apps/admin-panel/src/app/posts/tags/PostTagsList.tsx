import { Datagrid, List, ReferenceArrayField, TextField } from "react-admin";

export const PostTagsList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="title" />
        <TextField source="slug" />
        <ReferenceArrayField source="postId" reference="posts/posts" />
      </Datagrid>
    </List>
  );
};
