<script lang="ts">
	import Artist from '../components/Artist.svelte'
	import data from '../data'
</script>

<section id="cases">
	{#each data.artists as artist, index}
		<Artist
			art={`/content/${artist.name.toLowerCase()}/${artist.name.toLowerCase()}Pixel.png`}
			profiles={artist.socials}
			profilePic={artist.pic ? `/content/${artist.name.toLowerCase()}/${artist.name.toLowerCase()}Profile.png` : '/images/defaultProfile.png'}
			message={artist.message === '' ? 'Sem recado.' : artist.message}
			name={artist.name}
			dir={index % 2 === 0 ? true : false}
			pic={artist.pic}
		/>
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: center;
		align-items: center;
	}
</style>
