import { List, Datagrid, TextField, BooleanField } from "react-admin";

export const OutboxItemsList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <BooleanField source="polling_enabled" />
        </Datagrid>
    </List>
);
