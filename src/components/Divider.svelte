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
