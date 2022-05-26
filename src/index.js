import ReactDOM from 'react-dom/client';
import App from './App';

import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import { GameProvider } from './context/GameContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<GameProvider>
			<App />
		</GameProvider>
	</BrowserRouter>
);
