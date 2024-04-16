import {
  Edit,
  BooleanInput,
  SimpleForm,
} from "react-admin";

export const InboxItemsEdit = () => (
  <Edit>
      <SimpleForm>
          <BooleanInput source="polling_enabled" />
      </SimpleForm>
  </Edit>
);
