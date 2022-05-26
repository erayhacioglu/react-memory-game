import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const [gameData, setGameData] = useState({
		username: '',
		level: 'easy',
	});

	let navigate = useNavigate();

	const handleClick = (e) => {
		e.preventDefault();
		if (!gameData.username || !gameData.level) {
			alert('Cannot left blank');
		} else {
			navigate(
				`/game?username=${gameData.username.toLowerCase()}&level=${gameData.level.toLowerCase()}`
			);
		}
	};

	return (
		<div className='game-form-wrapper'>
			<form onSubmit={handleClick} className='game-form'>
				<h2 className='game-title'>Memory Game</h2>
				<div className='game-fields'>
					<label htmlFor='username' className='game-label'>
						Username
					</label>
					<input
						className='game-input'
						id='username'
						value={gameData.username}
						onChange={(e) =>
							setGameData({ ...gameData, username: e.target.value })
						}
					/>
				</div>
				<div className='game-fields'>
					<label htmlFor='level' className='game-label'>
						Level
					</label>
					<select
						className='game-input'
						id='level'
						value={gameData.level}
						onChange={(e) =>
							setGameData({ ...gameData, level: e.target.value })
						}
					>
						<option value='easy'>Easy</option>
						<option value='medium'>Medium</option>
						<option value='hard'>Hard</option>
					</select>
				</div>
				<hr />
				<button className='game-btn'>Start Game</button>
			</form>
		</div>
	);
};

export default Home;
