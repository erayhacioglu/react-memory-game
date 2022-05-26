const Card = ({ card, handleChoise, flipped, disabled }) => {
	const handleClick = (card) => {
		if (!disabled) {
			handleChoise(card);
		}
	};

	return (
		<div className='card'>
			<div className={flipped ? 'flipped' : ''}>
				<img src={card?.src} alt='' className='front' />
				<img
					src='/img/cover.png'
					alt=''
					className='back'
					onClick={() => handleClick(card)}
				/>
			</div>
		</div>
	);
};

export default Card;
