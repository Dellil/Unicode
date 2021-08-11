import React from 'react';
import ReactDOM from 'react-dom';

import 'style.css';
import StoreContext, { stores } from 'stores';
import App from 'App';

ReactDOM.render(
	<React.StrictMode>
		<StoreContext.Provider value={stores}>
			<App />
		</StoreContext.Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
