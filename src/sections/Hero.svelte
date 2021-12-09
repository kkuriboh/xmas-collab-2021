<script lang="ts">
	import data from '../data'
	import { onMount } from 'svelte'
	let span: HTMLSpanElement
</script>

<section>
	<div id="container">
		{#each data.artists as artist}
			<a href={'#' + artist.name.toLowerCase()}>
				<canvas
					on:mouseenter={() => {
						span.textContent = artist.name
						span.style.padding = '0.3rem'
					}}
					on:mouseleave={() => {
						span.textContent = ''
						span.style.padding = '0'
					}}
					on:mousemove={(event) => {
						span.style.top = event.clientY - 36 + 'px'
						span.style.left = event.clientX + 'px'
					}}
				/>
			</a>
		{/each}
	</div>
</section>
<span bind:this={span} />

<style>
	canvas {
		position: relative;
		width: 6rem;
		height: 6rem;
		image-rendering: -moz-crisp-edges;
		image-rendering: -webkit-crisp-edges;
		image-rendering: pixelated;
		image-rendering: crisp-edges;
		background-repeat: no-repeat;
		background-image: url('/images/placeholder.png');
		background-size: contain;
		mix-blend-mode: soft-light;
		cursor: pointer;
	}
	canvas:hover {
		animation: selectAnim 0.8s infinite;
	}
	@keyframes selectAnim {
		50% {
			transform: scale(1.1, 0.9);
		}
		100% {
			transform: scale(1);
		}
	}
	span {
		position: absolute;
		background-color: #32344a;
		opacity: 0.7;
		border-radius: 0.5rem;
	}
	/* canvas::content {
		content: attr(data-name);
		position: absolute;
		display: none;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	canvas::content:hover {
		display: block;
	} */
	section {
		position: relative;
		margin-top: 1rem;
		padding: 2rem;
		width: 70%;
	}
	section::before {
		content: '';
		position: absolute;
		z-index: -2;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('/images/cenario.png');
		background-size: cover;
		filter: blur(0.5rem);
		mix-blend-mode: soft-light;
	}
	#container {
		padding: 2rem;
		text-align: center;
		position: relative;
	}
	#container::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			360deg,
			rgba(122, 162, 247, 1) 5%,
			rgba(122, 162, 247, 0.15) 100%
		);
		border-radius: 1rem;
	}
</style>
