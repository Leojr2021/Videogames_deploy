import React from 'react';
import {Link} from 'react-router-dom';
import NotFound from '../../components/NotFound/NotFound';
import './Card.css';
import goldenMedal from '../../assets/star.png'

function Card({data}) {
	return (
		<div className='card'>
			<div className='card_content'>


			<Link to={`/videogames/${data.id}`}>
				{data.image === null || !data.image ? (
					<NotFound image={'noimage'} />
				) : (
					<img className='img' src={data.image} alt={data.name} />
				)}
			</Link>
			<div className='textCard'>
				<div className='nameGenres'>
					<div className='name'>{data.name}</div>
					<div className='genres'>{data.genres}</div>
				</div>
				<div className='divRating'>
					<div className='GoldenMedal'>
						<img src={goldenMedal} alt="gold medal" />
					</div>
					<div className='rating'>{data.rating}</div>
				</div>
			</div>


			</div>
		</div>
	);
}

export default Card;
