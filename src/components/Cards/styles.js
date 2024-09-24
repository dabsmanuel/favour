import styled from 'styled-components';

export const StyledWrapper = styled.div`
	.cards-section {
		padding: 0.8em;
		overflow: hidden;

		.swiper {
			width: 350px;
			height: 490px;
		}

		.swiper-slide {
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			border-radius: 18px;
			font-size: 22px;
			font-family: var(--font-stack-2);
			font-weight: 400;
			color: #fff;
			padding: 0.4em;
			background-color: rgba(0, 0, 0, 0.5); // semi-transparent overlay
			background-blend-mode: overlay;
			text-shadow: 2px 2px 4px rgba(0,0,0,0.5); // text shadow for better readability
		}
		
	}
`;