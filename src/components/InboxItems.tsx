import { List, Datagrid, TextField } from "react-admin";

export const InboxItemsList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name" />
        </Datagrid>
    </List>
);
