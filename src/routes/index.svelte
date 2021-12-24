<script>
	import Divider from '../components/Divider.svelte'
	import Splash from '../components/Splash.svelte'
	import Hero from '../sections/Hero.svelte'
	import Exposition from '../sections/Exposition.svelte'
	import Collab from '../sections/Collab.svelte'

	import { onMount } from 'svelte'

	import generateSnowflakes from '../scripts/generateSnowflakes'

	onMount(() => {
		const isPhone = window.innerWidth < 600
		if (!isPhone) {
			generateSnowflakes()
		}
	})
</script>

<Splash />
<Hero />
<Divider />
<Exposition />
<Divider />
<Collab />
<div id="snowflakes" />

<style>
	#snowflakes {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: -10;
	}
</style>
