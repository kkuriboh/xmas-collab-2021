<script lang="ts">
	import Header from '../components/Header.svelte'
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
<a href="#cases">conteúdo principal</a>
<Header />
<main>
	<slot />
</main>
<footer>&copy;Augusto do Monte Pieper</footer>

<style>
	* {
		font-family: 'Titillium Web', sans-serif;
		color: #a9b1d6;
	}
	a {
		position: absolute;
		top: 0;
		transform: translateY(-100%);
		z-index: 20;
		padding: 1rem;
		background-color: #24283b;
		border-radius: 0 0 0.5rem 0.5rem;
		box-shadow: 1px 1px 1px 1px rgba(36, 40, 59, 0.5);
		color: #f5f5f5;
		transition: all 0.3s ease-in-out;
	}
	a:focus {
		transform: translateY(0);
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	footer {
		text-align: center;
		padding: 1rem;
		background: #32344a;
	}
</style>
