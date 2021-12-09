<!-- <div class="shapedividers_com-7088" />

<style>
	.shapedividers_com-7088 {
		overflow: hidden;
		position: relative;
		height: 2rem;
		width: 100%;
	}
	.shapedividers_com-7088::before {
		content: '';
		font-family: 'shape divider from ShapeDividers.com';
		position: absolute;
		bottom: -1px;
		left: -1px;
		right: -1px;
		top: -1px;
		z-index: 3;
		pointer-events: none;
		background-repeat: no-repeat;
		transform: scaleX(4);
		transform-origin: 100% 0;
		animation: 10s infinite alternate shape-anim-7088-mobile linear;
		background-size: 100% 40px;
		background-position: 50% 0%;
		background-image: url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 2.17" preserveAspectRatio="none"><path d="M0 .5c3.07.55 9.27-.42 16.14 0 6.88.4 13.75.57 19.14-.11V0H0z" fill="%23444b6a"/><path d="M0 1c3.17.8 7.29-.38 10.04-.55 2.75-.17 9.25 1.47 12.67 1.3 3.43-.17 4.65-.84 7.05-.87 2.4-.02 5.52.88 5.52.88V0H0z" opacity=".5" fill="%23444b6a"/><path d="M0 1.85c2.56-.83 7.68-.3 11.79-.42 4.1-.12 6.86-.61 9.58-.28 2.73.33 5.61 1.17 8.61 1 3-.19 4.73-.82 5.3-.84V.1H0z" opacity=".5" fill="%23444b6a"/></svg>');
	}

	@keyframes shape-anim-7088-mobile {
		100% {
			transform: scaleX(4) translateX(calc(100% - (100% / 4)));
		}
	}
	@media (min-width: 768px) {
		.shapedividers_com-7088::before {
			transform: scaleX(4);
			transform-origin: 100% 0;
			animation: 10s infinite alternate shape-anim-7088-mobile linear;
			background-size: 100% 40px;
			background-position: 50% 0%;
		}
	}

	@media (min-width: 1025px) {
		.shapedividers_com-7088::before {
			bottom: -0.1vw;
			left: -0.1vw;
			right: -0.1vw;
			top: -0.1vw;
			transform: scaleX(4);
			transform-origin: 100% 0;
			animation: 10s infinite alternate shape-anim-7088-mobile linear;
			background-size: 100% 50px;
			background-position: 50% 0%;
		}
	}
	@media (min-width: 2100px) {
		.shapedividers_com-7088::before {
			background-size: 100% calc(2vw + 50px);
		}
	}
</style> -->
<b class="hr" />

<style>
	.hr {
		width: 100%;
		height: 1px;
		display: block;
		position: relative;
		margin: 1rem 0;
		padding: 2em 0;
	}
	.hr:after,
	.hr:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		bottom: 50%;
		left: 0;
	}
	.hr:before {
		background: linear-gradient(
			90deg,
			#24283b 0%,
			#24283b 50%,
			transparent 50%,
			transparent 100%
		);
		background-size: 15px;
		background-position: center;
		z-index: 1;
	}
	.hr:after {
		transition: opacity 0.3s ease, animation 0.3s ease;
		background: linear-gradient(
			to right,
			#449dab 5%,
			#e0af68 15%,
			#e0af68 25%,
			#f7768e 35%,
			#f7768e 45%,
			#ad8ee6 55%,
			#ad8ee6 65%,
			#9ece6a 75%,
			#9ece6a 85%,
			#449dab 95%
		);
		background-size: 200%;
		background-position: 0%;
		animation: bar 1s linear infinite;
	}
	@keyframes bar {
		0% {
			background-position: 0%;
		}
		100% {
			background-position: 200%;
		}
	}
</style>
