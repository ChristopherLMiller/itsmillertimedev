import { Edit, SimpleForm, TextInput, required } from "react-admin";

export const PostCategoryEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label="ID" source="id" />
      <TextInput source="title" validate={required()} />
      <TextInput source="slug" />
    </SimpleForm>
  </Edit>
);
