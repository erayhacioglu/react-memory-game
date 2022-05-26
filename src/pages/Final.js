import { useGame } from '../context/GameContext';

const Final = () => {
	const { seconds, minutes, username, level } = useGame();

	return (
		<div className='final-wrapper'>
			<div className='final-table'>
				<h2 className='final-title'>Result</h2>
				<div className='final-table-item'>Username: {username}</div>
				<div className='final-table-item'>Level: {level}</div>
				<div className='final-table-item'>
					Time:{' '}
					{`${minutes < 10 ? '0' + minutes : minutes}:${
						seconds < 10 ? '0' + seconds : seconds
					}`}
				</div>
				<button
					onClick={() => (window.location.href = '/')}
					className='restart-btn'
				>
					Restart Game
				</button>
			</div>
		</div>
	);
};

export default Final;
