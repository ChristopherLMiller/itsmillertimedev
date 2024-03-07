import {
  BooleanField,
  CreateButton,
  Datagrid,
  DateField,
  ExportButton,
  FilterButton,
  InfiniteList,
  NumberField,
  ReferenceField,
  SelectColumnsButton,
  TextField,
  TextInput,
  TopToolbar,
} from "react-admin";

const ListActions = () => (
  <TopToolbar>
    <SelectColumnsButton />
    <FilterButton />
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);

const postFilters = [
  <TextInput
    key="title-filter"
    label="Title"
    source="title"
    defaultValue="Example Title"
  />,
];

export const PostList = () => {
  return (
    <InfiniteList actions={<ListActions />} filters={postFilters}>
      <Datagrid rowClick="edit">
        <TextField source="title" />
        <TextField source="slug" />
        <TextField source="summary" />
        <NumberField source="wordCount" />
        <DateField source="createdAt" label="Created" />
        <DateField source="updatedAt" label="Updated" />
        <BooleanField source="published" />
        <DateField source="publishedAt" label="Published" />
        {false && (
          <ReferenceField source="imagePublic_id" reference="imagePublics" />
        )}
        <ReferenceField
          label="Category"
          source="postCategoryId"
          reference="posts/categories"
        >
          <TextField source="title" />
        </ReferenceField>
      </Datagrid>
    </InfiniteList>
  );
};
