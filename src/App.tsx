
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import { OutboxItemsList } from './components/OutboxItems';
import { InboxItemsList } from './components/InboxItems';

export const App = () => (
    <Admin
        dataProvider={dataProvider}
	>
        <Resource name="outbox_items" list={OutboxItemsList} edit={EditGuesser} show={ShowGuesser} />
		<Resource name="inbox_items" list={InboxItemsList} edit={EditGuesser} show={ShowGuesser} />
    </Admin>
);
