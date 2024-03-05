import {
  CreateButton,
  Datagrid,
  ExportButton,
  FilterButton,
  InfiniteList,
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

export const PostCategoryList = () => {
  return (
    <InfiniteList actions={<ListActions />} filters={postFilters}>
      <Datagrid rowClick="edit">
        <TextField source="title" />
        <TextField source="slug" />
      </Datagrid>
    </InfiniteList>
  );
};
