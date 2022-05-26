import { createContext, useContext, useState, useEffect } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [gameStart, setGameStart] = useState(false);
	const [cards, setCards] = useState([]);
	const [choiseOne, setChoiseOne] = useState(null);
	const [choiseTwo, setChoiseTwo] = useState(null);
	const [disabled, setDisabled] = useState(false);
	const [loading, setLoading] = useState(true);
	const [username, setUsername] = useState('');
	const [level, setLevel] = useState('');

	var timer;
	useEffect(() => {
		if (gameStart) {
			timer = setInterval(() => {
				setSeconds(seconds + 1);
				if (seconds === 59) {
					setMinutes(minutes + 1);
					setSeconds(0);
				}
			}, 1000);
		}
		return () => clearInterval(timer);
	});

	const shuffleCard = (gameLevel) => {
		if (gameLevel === 'easy') {
			const shuffledCard = [...easyGame, ...easyGame]
				.sort(() => Math.random() - 0.5)
				.map((card) => ({ ...card, id: Math.random() }));
			setCards(shuffledCard);
			setLoading(false);
		} else if (gameLevel === 'medium') {
			const shuffledCard = [...mediumGame, ...mediumGame]
				.sort(() => Math.random() - 0.5)
				.map((card) => ({ ...card, id: Math.random() }));
			setCards(shuffledCard);
			setLoading(false);
		} else if (gameLevel === 'hard') {
			const shuffledCard = [...hardGame, ...hardGame]
				.sort(() => Math.random() - 0.5)
				.map((card) => ({ ...card, id: Math.random() }));
			setCards(shuffledCard);
			setLoading(false);
		} else {
			return;
		}
	};

	const handleChoise = (card) => {
		choiseOne ? setChoiseTwo(card) : setChoiseOne(card);
	};

	useEffect(() => {
		if (choiseOne && choiseTwo) {
			setDisabled(true);
			if (choiseOne.src === choiseTwo.src) {
				setCards((prevCards) => {
					return prevCards.map((card) => {
						if (card.src === choiseOne.src) {
							return { ...card, matched: true };
						} else {
							return card;
						}
					});
				});
				resetChoise();
			} else {
				setTimeout(() => {
					resetChoise();
				}, 1000);
			}
		}
	}, [choiseOne, choiseTwo]);

	const resetChoise = () => {
		setChoiseOne(null);
		setChoiseTwo(null);
		setDisabled(false);
	};

	const values = {
		seconds,
		minutes,
		gameStart,
		setGameStart,
		shuffleCard,
		cards,
		setCards,
		handleChoise,
		choiseOne,
		choiseTwo,
		disabled,
		loading,
		setLevel,
		setUsername,
		username,
		level,
	};

	return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
};

export const useGame = () => useContext(GameContext);

const easyGame = [
	{ src: '/img/html.png', matched: false },
	{ src: '/img/css.png', matched: false },
	{ src: '/img/javascript.png', matched: false },
	{ src: '/img/bootstrap.png', matched: false },
	{ src: '/img/tailwind.png', matched: false },
	{ src: '/img/sass.png', matched: false },
];

const mediumGame = [
	{ src: '/img/html.png', matched: false },
	{ src: '/img/css.png', matched: false },
	{ src: '/img/javascript.png', matched: false },
	{ src: '/img/bootstrap.png', matched: false },
	{ src: '/img/tailwind.png', matched: false },
	{ src: '/img/sass.png', matched: false },
	{ src: '/img/react.png', matched: false },
	{ src: '/img/vue.png', matched: false },
	{ src: '/img/angular.png', matched: false },
];

const hardGame = [
	{ src: '/img/html.png', matched: false },
	{ src: '/img/css.png', matched: false },
	{ src: '/img/javascript.png', matched: false },
	{ src: '/img/bootstrap.png', matched: false },
	{ src: '/img/tailwind.png', matched: false },
	{ src: '/img/sass.png', matched: false },
	{ src: '/img/react.png', matched: false },
	{ src: '/img/vue.png', matched: false },
	{ src: '/img/angular.png', matched: false },
	{ src: '/img/ember.png', matched: false },
	{ src: '/img/svelte.png', matched: false },
	{ src: '/img/next.png', matched: false },
];
