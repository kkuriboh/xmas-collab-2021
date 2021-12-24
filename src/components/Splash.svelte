<script lang="ts">
	import { onMount } from 'svelte'

	let div: HTMLDivElement
	onMount(() => {
		setTimeout(() => {
			div.style.display = 'none !important'
		}, 2400)
	})
</script>

<div bind:this={div}>
	<img src="/images/gift.svg" alt="gift" />
</div>

<style>
	div {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	div::after,
	div::before {
		z-index: 50;
		position: absolute;
		content: '';
		background-color: #f7768e;
		width: 100%;
		height: 50%;
		overflow: hidden;
	}
	div::after {
		left: 0;
		top: 50%;
		animation: afterAnim 0.4s 3s forwards;
	}
	div::before {
		top: 0;
		left: 0;
		animation: beforeAnim 0.4s 3s forwards;
	}
	img {
		z-index: 60;
		width: 6rem;
		animation: imgAnim 2s 1s forwards;
	}
	@keyframes imgAnim {
		50% {
			transform: rotateZ(360deg);
		}
		75% {
			transform: rotateZ(-15deg);
			opacity: 1;
		}
		100% {
			transform: rotateZ(720deg);
			opacity: 0;
		}
	}
	@keyframes afterAnim {
		100% {
			transform: translateY(100%);
			opacity: 0;
			display: none;
			z-index: -20;
		}
	}
	@keyframes beforeAnim {
		100% {
			transform: translateY(-100%);
			opacity: 0;
			display: none;
			z-index: -20;
		}
	}
</style>
