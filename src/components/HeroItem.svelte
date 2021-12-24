<script lang="ts">
	import { onMount } from 'svelte'

	type ArtistType = {
		name: string
		message: string
		socials: {
			name: string
			account: string
			url: string
		}[]
	}
	export let artist: ArtistType
	export let span: HTMLSpanElement

	let canvas: HTMLCanvasElement
	onMount(() => {
		canvas.style.backgroundImage = `url("/content/${artist.name.toLowerCase()}/${artist.name.toLowerCase()}Pixel.png")`
	})
</script>

<a href={'#' + artist.name.toLowerCase()}
	><canvas
		bind:this={canvas}
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
		background-size: contain;
		background-position: center;
		mix-blend-mode: soft-light;
		cursor: pointer;
	}
	canvas:hover {
		animation: selectAnim 0.8s infinite;
		mix-blend-mode: normal;
	}
	@keyframes selectAnim {
		50% {
			transform: scale(1.1, 0.9);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
