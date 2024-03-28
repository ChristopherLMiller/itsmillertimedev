import { RichTextInput } from "ra-input-rich-text";
import {
  BooleanInput,
  Create,
  DateInput,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput disabled label="ID" source="id" />
      <TextInput source="title" validate={required()} />
      <TextInput source="slug" />
      <TextInput source="summary" />
      <NumberInput source="wordCount" />
      <DateInput source="createdAt" disabled />
      <DateInput source="updatedAt" disabled />
      <BooleanInput source="published" />
      <DateInput source="publishedAt" />
      <RichTextInput source="content" />
      <ReferenceInput source="postCategoryId" reference="posts/categories" />
    </SimpleForm>
  </Create>
);
