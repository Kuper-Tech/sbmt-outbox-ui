import {
  Edit,
  BooleanInput,
  SimpleForm,
} from "react-admin";

export const InboxClassesEdit = () => (
  <Edit>
      <SimpleForm>
          <BooleanInput source="polling_enabled" />
      </SimpleForm>
  </Edit>
);
