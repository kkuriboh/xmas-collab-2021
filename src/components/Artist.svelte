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
	export let dir: boolean
	export let pic: boolean

	let canvas: HTMLCanvasElement
	let container: HTMLDivElement
	let profileTop: HTMLDivElement
	let img: HTMLImageElement

	onMount(() => {
		const gradient = generateGradient()
		container.style.background = `linear-gradient(330deg, rgba(${gradient[0]}, 0.15) 0%, rgba(${gradient[1]}, 0.8) 100%`
		canvas.style.backgroundImage = `url(${art})`
		if (dir) {
			container.style.flexDirection = 'row'
			profileTop.style.flexDirection = 'row'
			canvas.style.backgroundPosition = 'left'
			canvas.style.marginRight = '1rem'
		} else {
			container.style.flexDirection = 'row-reverse'
			canvas.style.backgroundPosition = 'right'
			profileTop.style.flexDirection = 'row-reverse'
			canvas.style.marginLeft = '1rem'
		}
		if (!pic) {
			img.style.imageRendering = '-moz-crisp-edges'
			img.style.imageRendering = '-webkit-crisp-edges'
			img.style.imageRendering = 'crisp-edges'
			img.style.imageRendering = 'pixelated'
		}
	})
</script>

<div class="container" id={name.toLowerCase()} bind:this={container}>
	<canvas bind:this={canvas} />
	<div class="profile">
		<div class="profile-top" bind:this={profileTop}>
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
			<img
				class="profilePic"
				bind:this={img}
				src={profilePic}
				alt={name}
			/>
		</div>
		<p class="message">{message}</p>
	</div>
</div>

<style>
	div {
		display: flex;
	}
	.container {
		margin: 1rem 0;
		padding: 2rem;
		border-radius: 1rem;
		width: 50%;
		justify-content: space-between;
	}
	canvas {
		width: 30%;
		height: 16rem;
		image-rendering: -moz-crisp-edges;
		image-rendering: -webkit-crisp-edges;
		image-rendering: pixelated;
		image-rendering: crisp-edges;
		background-repeat: no-repeat;
		background-size: contain;
	}
	.socials {
		flex-direction: column;
	}
	.profile {
		flex-direction: column;
		justify-content: center;
		width: 100%;
	}
	.profile-top {
		width: 100%;
		justify-content: space-around;
	}
	.profilePic {
		border-radius: 50%;
		border: 2px solid #ad8ee6;
		height: 8rem;
		width: 8rem;
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
		box-shadow: inset 10rem 0 0 0 rgba(68, 157, 171);
		color: #32344a;
		opacity: 0.6;
	}
	.message {
		text-indent: 1rem;
		margin-top: 1rem;
	}
	@media screen and (max-width: 1200px) and (min-width: 1000px) {
		canvas {
			width: 20%;
		}
	}
	@media screen and (max-width: 992px) {
		.container {
			flex-direction: column-reverse !important;
			align-items: center;
		}
		canvas {
			width: inherit;
			margin: 0 !important;
			margin-top: 1rem !important;
			background-position: center !important;
		}
	}
	@media screen and (max-width: 800px) {
		.profile-top {
			flex-direction: column-reverse !important;
			align-items: center;
			margin-bottom: 1rem;
		}
	}
	@media screen and (max-width: 600px) {
		.container {
			width: 80%;
		}
	}
</style>
