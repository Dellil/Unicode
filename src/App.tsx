import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from '@/pages/Main';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Main />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
