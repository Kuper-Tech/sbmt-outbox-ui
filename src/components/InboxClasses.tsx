import { List, Datagrid, TextField } from "react-admin";

export const InboxClassesList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name" />
        </Datagrid>
    </List>
);
