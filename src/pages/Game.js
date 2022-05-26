import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
//components
import Card from '../components/Card';
//contexs
import { useGame } from '../context/GameContext';

const Game = () => {
	const [searchParams] = useSearchParams();
	const username = searchParams.get('username');
	const level = searchParams.get('level');
	const navigate = useNavigate();

	const {
		seconds,
		minutes,
		setGameStart,
		shuffleCard,
		cards,
		choiseOne,
		choiseTwo,
		disabled,
		handleChoise,
		loading,
		setLevel,
		setUsername,
	} = useGame();

	useEffect(() => {
		setGameStart(true);
		shuffleCard(level.toLowerCase());
		setUsername(username);
		setLevel(level);
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (loading === false) {
			if (cards.every((card) => card.matched === true)) {
				setGameStart(false);
				setTimeout(() => navigate('/final'), 1000);
			}
		}
		// eslint-disable-next-line
	}, [cards, navigate, loading]);

	if (loading) {
		return 'Loading...';
	}

	return (
		<>
			<div className='info'>
				{username} / {level}
			</div>
			<div className='time'>
				{minutes < 10 ? '0' + minutes : minutes} :&nbsp;
				{seconds < 10 ? '0' + seconds : seconds}
			</div>
			<div className='cards'>
				{cards?.map((card) => (
					<Card
						key={card.id}
						card={card}
						handleChoise={handleChoise}
						flipped={card === choiseOne || card === choiseTwo || card.matched}
						disabled={disabled}
					/>
				))}
			</div>
		</>
	);
};

export default Game;
