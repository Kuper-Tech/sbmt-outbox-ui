import {
  Edit,
  BooleanInput,
  SimpleForm,
} from "react-admin";

export const OutboxClassesEdit = () => (
  <Edit>
      <SimpleForm>
          <BooleanInput source="polling_enabled" />
      </SimpleForm>
  </Edit>
);
