import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import Container from '../shared/Container/Container';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { reasons } from '../../data/data';
import { StyledWrapper } from './styles';

const Cards = () => {
	return (
		<StyledWrapper>
			<Container>
				<div
					className="cards-section"
					data-aos="fade-up"
					data-aos-duration="1200"
				>
					<Swiper modules={[EffectCards]} effect={'cards'} grabCursor={true}>
						{reasons.map((reason) => (
							<SwiperSlide 
								key={reason.id} 
								style={{
									backgroundImage: `url(${reason.image})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center'
								}}
							>
								{reason.text}
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</Container>
		</StyledWrapper>
	);
};

export default Cards;