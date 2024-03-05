import { Card, Container, Grid, Typography } from "@mui/material";
import { Post } from "@prisma/client";
import { format } from "date-fns";
import { RichTextInput } from "ra-input-rich-text";
import {
  BooleanInput,
  DateInput,
  Edit,
  NumberInput,
  PrevNextButtons,
  ReferenceArrayInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  TopToolbar,
  required,
  useEditContext,
  useRecordContext,
} from "react-admin";

const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

const Aside = () => {
  const { record, isLoading } = useEditContext<Post>();
  console.log(record);
  if (isLoading) return null;
  return (
    <Card
      sx={{
        width: "250px",
        margin: "0 1em",
        flex: "1 0 auto",
        padding: "1em",
      }}
    >
      <Typography variant="h5">Post Details</Typography>
      {record && (
        <>
          <Typography variant="body1">ID: {record.id}</Typography>
          <Typography variant="body2">
            Created: {format(new Date(record?.createdAt), "PPP")}
          </Typography>
          <Typography variant="body2">
            Last updated: {format(new Date(record.updatedAt), "PPP")}
          </Typography>
          <Typography variant="body2">
            Published:{" "}
            {record.publishedAt
              ? format(new Date(record.publishedAt), "PPP")
              : "DRAFT"}
          </Typography>
        </>
      )}
    </Card>
  );
};

export const PostEdit = () => {
  return (
    <Container>
      <Edit
        title={<PostTitle />}
        aside={<Aside />}
        actions={
          <TopToolbar>
            <PrevNextButtons />
          </TopToolbar>
        }
      >
        <SimpleForm>
          <Grid spacing={1} columns={{ xs: 3 }}>
            <Grid item>
              <TextInput source="title" validate={required()} />
            </Grid>
            <Grid item>
              <TextInput source="slug" validate={required()} />
            </Grid>
            <TextInput source="summary" />
            <NumberInput source="wordCount" />
            <BooleanInput source="published" />
            <DateInput source="publishedAt" />
            <RichTextInput source="content" />
            <ReferenceInput
              source="postCategoryId"
              reference="posts/categories"
            />
            <ReferenceArrayInput source="postTags" reference="posts/tags" />
          </Grid>
        </SimpleForm>
      </Edit>
    </Container>
  );
};
