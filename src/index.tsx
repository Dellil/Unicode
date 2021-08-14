import React from 'react';
import ReactDOM from 'react-dom';

import '@/style.css';
import StoreContext, { Stores } from '@/stores';
import App from '@/App';

ReactDOM.render(
	<React.StrictMode>
		<StoreContext.Provider value={Stores}>
			<App />
		</StoreContext.Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
