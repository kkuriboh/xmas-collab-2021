<script lang="ts">
	import { onMount } from 'svelte'

	import generateGradient from '../scripts/generateGradient'

	type ProfileType = {
		name: string
		account: string
		url: string
	}

	export let profiles: ProfileType[]
	export let profilePic: string
	export let art: string
	export let message: string
	export let name: string

	let canvas: HTMLCanvasElement
	let container: HTMLDivElement

	onMount(() => {
		const gradient = generateGradient()
		container.style.background = `linear-gradient(330deg, rgba(${gradient[0]}, 0.15) 0%, rgba(${gradient[1]}, 0.8) 100%`
		canvas.style.backgroundImage = `url(${art})`
	})
</script>

<div class="container" id={name.toLowerCase()} bind:this={container}>
	<canvas bind:this={canvas} />
	<div class="profile">
		<div class="profile-top">
			<div class="socials">
				<h1>Redes Sociais:</h1>
				{#each profiles as profile}
					<p class="socialName">
						{profile.name}:
						<a target="_blank" href={profile.url}>
							{profile.account}
						</a>
					</p>
				{/each}
			</div>
			<img class="profilePic" src={profilePic} alt={name} />
		</div>
		<p>{message}</p>
	</div>
</div>

<style>
	.container {
		padding: 2rem;
		border-radius: 1rem;
		width: 50%;
		justify-content: space-between;
	}
	canvas {
		width: 16rem;
		height: 16rem;
		image-rendering: -moz-crisp-edges;
		image-rendering: -webkit-crisp-edges;
		image-rendering: pixelated;
		image-rendering: crisp-edges;
		background-repeat: no-repeat;
		background-size: contain;
	}
	div {
		display: flex;
	}
	.socials {
		flex-direction: column;
	}
	.profile {
		flex-direction: column;
		justify-content: center;
	}
	.profile-top {
		width: 100%;
		justify-content: space-between;
		align-items: flex-start;
	}
	.profilePic {
		border-radius: 50%;
		border: 2px solid #ad8ee6;
		height: 8rem;
		margin-bottom: 2rem;
	}
	.socialName {
		font-family: 'Corinthia', cursive;
		font-size: 1.8rem;
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}
	h1 {
		font-size: 1.9rem;
		margin-bottom: 1.2rem;
	}
	a {
		font-family: 'Titillium Web', sans-serif;
		font-size: 1rem;
		color: #f5f5f5;
		text-decoration: none;
		margin: 1px 0;
		padding: 0.3rem;
		border-radius: 4px;
		transition: ease-out 0.6s;
		opacity: 0.8;
	}
	a:hover {
		box-shadow: inset 120px 0 0 0 rgba(68, 157, 171);
		color: #32344a;
		opacity: 0.6;
	}
</style>
