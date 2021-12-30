<script lang="ts">
	import { onMount } from 'svelte'

	import Divider2 from './Divider2.svelte'

	let volume = 0.1
	let audio: HTMLAudioElement
	let audioButton: HTMLSpanElement
	let list: HTMLUListElement

	let menu: SVGSVGElement
	let line1: SVGRectElement
	let line2: SVGRectElement
	let line3: SVGRectElement

	function anim() {
		line1.animate(
			[
				{ transform: 'translate(0, 0)' },
				{ transform: 'translate(0, -100%)' },
				{
					transform: 'rotateZ(45deg)',
				},
			],
			{
				duration: 800,
				fill: 'forwards',
			}
		)
		line2.animate(
			[
				{ transform: 'translate(0, 0)' },
				{ transform: 'translate(0, -100%)' },
			],
			{
				duration: 800,
				fill: 'forwards',
			}
		)
		line3.animate(
			[
				{ transform: 'translate(0, 0)' },
				{ transform: 'translate(0, -100%)' },
				{
					transform: 'rotateZ(-45deg)  translate(-50%, -15%)',
				},
			],
			{
				duration: 800,
				fill: 'forwards',
			}
		)
	}
	function revAnim() {
		const animation = [{ transform: 'translate(0, 0)' }]
		line1.animate(animation, {
			duration: 600,
			fill: 'forwards',
		})
		line2.animate(animation, {
			duration: 600,
			fill: 'forwards',
		})
		line3.animate(animation, {
			duration: 600,
			fill: 'forwards',
		})
	}

	onMount(() => {
		const isPhone = window.innerWidth < 600
		if (isPhone) {
			list.style.display = 'none'
		}

		menu.addEventListener('click', () => {
			list.style.display = list.style.display === 'none' ? 'flex' : 'none'
			if (list.style.display === 'none') {
				revAnim()
			} else {
				anim()
			}
		})

		const listItems = document.querySelectorAll('.list-item')
		listItems.forEach((item) => {
			item.addEventListener('click', () => {
				if (isPhone) {
					revAnim()
					list.style.display = 'none'
				}
			})
		})
	})

	function handleMusicState() {
		if (audio.paused) {
			audio.play()
			audioButton.replaceChildren('墳')
		} else {
			audio.pause()
			audioButton.replaceChildren('ﱝ')
		}
	}
</script>

<header>
	<audio src="/audio/jingle-bells.mp3" bind:this={audio} bind:volume loop />
	<a href="#home">
		<img src="/images/logo.png" alt="logo" />
	</a>
	<h1>Dibiaru Xmas Collab</h1>
	<ul bind:this={list}>
		<li>
			<span bind:this={audioButton} on:click={handleMusicState}>ﱝ</span>
		</li>
		<li class="list-item">
			<Divider2 />
			<a href="#home"> home </a>
			<Divider2 />
		</li>
		<li class="list-item">
			<Divider2 />
			<a href="#cases"> cases </a>
			<Divider2 />
		</li>
		<li class="list-item">
			<Divider2 />
			<a href="#collab"> collab </a>
			<Divider2 />
		</li>
	</ul>
	<svg
		viewBox="0 0 100 80"
		width="40"
		height="24"
		class="icon"
		bind:this={menu}
	>
		<rect class="line line-1" width="100" height="6" bind:this={line1} />
		<rect
			class="line line-2"
			y="30"
			width="100"
			height="6"
			bind:this={line2}
		/>
		<rect
			class="line line-3"
			y="60"
			width="100"
			height="6"
			bind:this={line3}
		/>
	</svg>
</header>

<style>
	@font-face {
		font-family: 'FiraCodeNerdFont';
		src: url('/fonts/FiraCodeNerdFont.ttf');
	}
	* {
		font-family: 'Titillium Web', sans-serif;
		color: #a9b1d6;
	}
	header {
		position: sticky;
		z-index: 5;
		top: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background: #32344a;
	}
	img {
		max-height: 1.3rem;
		margin-left: 1rem;
	}
	h1 {
		position: absolute;
		left: 50vw;
		transform: translateX(-50%);
		font-family: 'Corinthia', cursive;
		font-size: 1.8rem;
	}
	ul {
		align-items: center;
		display: flex;
	}
	span {
		font-family: 'FiraCodeNerdFont';
		font-size: 1.4rem;
	}
	li {
		font-size: 1rem;
		list-style: none;
		margin: 0 1rem;
		cursor: pointer;
	}
	.icon {
		display: none;
	}
	@media screen and (max-width: 600px) {
		span {
			font-size: 2rem;
		}
		img {
			max-height: 1rem;
			margin: 0;
		}
		ul {
			position: fixed;
			z-index: -10;
			top: 3.3rem;
			left: 0;
			background-color: #32344a;
			flex-direction: column;
			align-content: flex-end;
			width: 100%;
			padding: 0.5rem;
			animation: topToBottom 0.5s forwards;
			height: 100%;
			display: none;
		}
		li {
			margin: 0;
			padding: 1.2rem 0;
			width: 90%;
			text-align: center;
			display: flex;
			flex-direction: column;
		}
		.line {
			fill: #a9b1d6;
		}
		.icon {
			display: block;
		}
	}
	@keyframes topToBottom {
		0% {
			transform: translateY(-100vh);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>
