<script lang="ts">
	import { onMount } from 'svelte'

	let audio: HTMLAudioElement
	let audioButton: HTMLSpanElement

	onMount(() => {
		const body = document.querySelector('body')
		// const snowFlakes = []
		for (let index = 0; index < 50; index++) {
			body.insertAdjacentHTML(
				'afterbegin',
				'<span class="snowflake" id={snowFlake} />'
			)
			// snowFlakes.push(0)
		}
		audio.volume = 0.1
		audio.loop = true
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

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Corinthia&family=Titillium+Web:wght@200;300;400&display=swap"
		rel="stylesheet"
	/>
	<link rel="stylesheet" href="/css/reset.css" />
	<link rel="stylesheet" href="/css/snow.css" />
	<title>xmas collab</title>
</svelte:head>
<header>
	<img src="https://dukebr.com/img/logo.png" alt="logo" />
	<h1>Dibiaru Xmas Collab</h1>
	<ul>
		<li>
			<span bind:this={audioButton} on:click={handleMusicState}>ﱝ</span>
		</li>
		<li>home</li>
		<li>cases</li>
		<li>collab</li>
	</ul>
</header>
<audio src="/audio/jingle-bells.mp3" bind:this={audio} />

<main>
	<!-- {#each snowFlakes as snowFlake}
		<span class="snowflake" id={snowFlake} />
	{/each} -->
	<slot />
</main>
<footer>&copy;Augusto do Monte Pieper</footer>

<style>
	* {
		font-family: 'Titillium Web', sans-serif;
		color: #a9b1d6;
		scroll-behavior: smooth;
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
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	footer {
		text-align: end;
		padding: 1rem;
		background: #32344a;
	}
</style>
