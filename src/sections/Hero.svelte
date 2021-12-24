<script lang="ts">
	import data from '../data'
	import HeroItem from '../components/HeroItem.svelte'

	let span: HTMLSpanElement
</script>

<section id="home">
	<div id="textContent">
		<h1>Dibiaru Xmas Collab</h1>
		<p>
			Evento ocorrido no mês de dezembro de 2021 em colaboração com
			diversos artistas.
		</p>
		<p>
			O evento inteiro foi acompanhado em <a
				target="_blank"
				href="https://twitch.tv/player_dbr">player_dbr</a
			>
			/
			<a target="_blank" href="https://discord.com/invite/rgDgfy8"
				>discord</a
			>.
		</p>
	</div>
	<div id="container">
		{#each data.artists as artist}
			<HeroItem {artist} {span} />
		{/each}
	</div>
</section>
<span bind:this={span} />

<style>
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
	#textContent {
		margin-bottom: 2rem;
		text-align: left;
	}
	h1 {
		font-size: 1.5rem;
	}
	p {
		margin-top: 1rem;
		text-indent: 1rem;
	}
	a {
		color: #f7768e;
	}
	#container {
		padding: 2rem;
		text-align: center;
		background: linear-gradient(
			360deg,
			rgba(122, 162, 247, 1) 5%,
			rgba(122, 162, 247, 0.15) 100%
		);
		border-radius: 1rem;
		scrollbar-color: rgba(68, 157, 171, 0.6) transparent;
	}
	span {
		position: absolute;
		background-color: #32344a;
		opacity: 0.7;
		border-radius: 0.5rem;
	}
	@media screen and (max-width: 992px) {
		section {
			width: 100%;
		}
		section::before {
			background-size: contain;
		}
	}
</style>
