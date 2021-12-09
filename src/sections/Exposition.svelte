<script lang="ts">
	import Artist from '../components/Artist.svelte'
	import data from '../data'
	// profile={`@${data.artists[index].socials.instagram.toLowerCase()}`}
</script>

<section>
	{#each data.artists as artist}
		<Artist
			art={`/content/${artist.name.toLowerCase()}/${artist.name.toLowerCase()}Pixel.png`}
			profiles={artist.socials}
			profilePic={`/content/${artist.name.toLowerCase()}/${artist.name.toLowerCase()}Profile.jpg`}
			message={artist.message}
			name={artist.name}
		/>
	{/each}
</section>

<style>
	section {
		display: flex;
		width: 100%;
		justify-content: center;
	}
</style>
