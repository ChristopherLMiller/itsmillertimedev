import {
  Edit,
  ReferenceArrayInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

export const PostTagsEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label="ID" source="id" />
      <TextInput source="title" validate={required()} />
      <TextInput source="slug" />
      <ReferenceArrayInput source="postId" reference="posts/posts" />
    </SimpleForm>
  </Edit>
);
