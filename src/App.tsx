
import { Admin, Resource, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import { OutboxClassesList } from './components/OutboxClasses';
import { OutboxClassesEdit } from './components/OutboxClassesEdit';
import { InboxClassesList } from './components/InboxClasses';
import { InboxClassesEdit } from './components/InboxClassesEdit';
import OutputIcon from "@mui/icons-material/Output";
import InputIcon from "@mui/icons-material/ExitToApp";

export const App = () => (
    <Admin
        dataProvider={dataProvider}
	>
        <Resource name="outbox_classes" icon={OutputIcon} list={OutboxClassesList} edit={OutboxClassesEdit} show={ShowGuesser} />
		<Resource name="inbox_classes" icon={InputIcon} list={InboxClassesList} edit={InboxClassesEdit} show={ShowGuesser} />
    </Admin>
);
