import { Create, SimpleForm, TextInput, required } from "react-admin";

export const PostCategoryCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput disabled label="ID" source="id" />
      <TextInput source="title" validate={required()} />
      <TextInput source="slug" />
    </SimpleForm>
  </Create>
);
