import {
  Edit,
  BooleanInput,
  SimpleForm,
} from "react-admin";

export const OutboxItemsEdit = () => (
  <Edit>
      <SimpleForm>
          <BooleanInput source="polling_enabled" />
      </SimpleForm>
  </Edit>
);
