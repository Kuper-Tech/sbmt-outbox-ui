import { List, Datagrid, TextField } from "react-admin";

export const OutboxItemsList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name" />
        </Datagrid>
    </List>
);
