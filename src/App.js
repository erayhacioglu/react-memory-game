import { Routes, Route } from 'react-router-dom';
//pages
import Home from './pages/Home';
import Game from './pages/Game';
import Final from './pages/Final';

const App = () => {
	return (
		<div className='container'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/game' element={<Game />} />
				<Route path='/final' element={<Final />} />
			</Routes>
		</div>
	);
};

export default App;
