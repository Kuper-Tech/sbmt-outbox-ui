
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import { OutboxItemsList } from './components/OutboxItems';
import { OutboxItemsEdit } from './components/OutboxItemsEdit';
import { InboxItemsList } from './components/InboxItems';
import OutputIcon from "@mui/icons-material/Output";
import InputIcon from "@mui/icons-material/ExitToApp";

export const App = () => (
    <Admin
        dataProvider={dataProvider}
	>
        <Resource name="outbox_items" icon={OutputIcon} list={OutboxItemsList} edit={OutboxItemsEdit} show={ShowGuesser} />
		<Resource name="inbox_items" icon={InputIcon} list={InboxItemsList} edit={EditGuesser} show={ShowGuesser} />
    </Admin>
);
