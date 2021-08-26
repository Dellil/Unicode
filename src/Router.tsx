import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '@/components/Header';
import Main from '@/pages/Main';
import Testing from '@/pages/Testing';
import EditTest from '@/pages/EditTest';

interface Props {}

const Router: React.FC<Props> = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/">
					<Main />
				</Route>
				<Route exact path="/:id/test">
					<Testing />
				</Route>
				<Route exact path="/:id/edit">
					<EditTest />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
