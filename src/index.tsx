import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import '@/style.css';
import StoreContext, { Stores } from '@/stores';
import App from '@/App';

Modal.setAppElement(document.getElementById('unicode-app')!);

ReactDOM.render(
	<React.StrictMode>
		<StoreContext.Provider value={Stores}>
			<App />
		</StoreContext.Provider>
	</React.StrictMode>,
	document.getElementById('unicode-app'),
);
