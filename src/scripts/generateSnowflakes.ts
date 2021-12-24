export default function generateSnowflakes() {
	const container = document.querySelector('#snowflakes')
	for (let i = 0; i < 200; i++) {
		container.insertAdjacentHTML(
			'afterbegin',
			`<span class="snowflake" id="snowflake-${i}"/>`
		)
	}
	const snowflakes = Array.from(
		document.getElementsByClassName(
			'snowflake'
		) as HTMLCollectionOf<HTMLSpanElement>
	)
	const animation = () => {
		let random = Math.random() * 100
		return [
			{
				transform: `translate(${
					Math.round(random) % 2 === 0 ? random * -1 : random
				}vw, 105vh)`,
			},
		]
	}
	snowflakes.forEach((snowflake) => {
		const bounds = `${Math.floor(Math.random() * 8)}px`
		snowflake.style.left = `${Math.floor(Math.random() * 100)}%`
		snowflake.style.width = bounds
		snowflake.style.height = bounds
		snowflake.animate(animation(), {
			duration: Math.floor(Math.random() * 15000) + 1000,
			iterations: Infinity,
		})
	})
}
