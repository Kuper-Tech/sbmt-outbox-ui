
import { Admin, Resource, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import { OutboxItemsList } from './components/OutboxItems';
import { OutboxItemsEdit } from './components/OutboxItemsEdit';
import { InboxItemsList } from './components/InboxItems';
import { InboxItemsEdit } from './components/InboxItemsEdit';
import OutputIcon from "@mui/icons-material/Output";
import InputIcon from "@mui/icons-material/ExitToApp";

export const App = () => (
    <Admin
        dataProvider={dataProvider}
	>
        <Resource name="outbox_items" icon={OutputIcon} list={OutboxItemsList} edit={OutboxItemsEdit} show={ShowGuesser} />
		<Resource name="inbox_items" icon={InputIcon} list={InboxItemsList} edit={InboxItemsEdit} show={ShowGuesser} />
    </Admin>
);
