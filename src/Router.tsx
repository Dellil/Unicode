import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '@/components/Header';
import Main from '@/pages/Main';

interface Props {}

const Router: React.FC<Props> = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/">
					<Main />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
