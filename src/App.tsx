
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';

export const App = () => (
    <Admin
        dataProvider={dataProvider}
	>
        <Resource name="outboxes" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
		<Resource name="inboxes" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    </Admin>
);
