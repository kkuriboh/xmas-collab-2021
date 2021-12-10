export default function generateSnowflakes() {
	const body = document.querySelector('body')
	for (let i = 0; i < 50; i++) {
		body.insertAdjacentHTML(
			'afterbegin',
			`<span class="snowflake" id="snowflake-${i}"/>`
		)
	}
	const snowflakes = Array.from(
		document.getElementsByClassName(
			'snowflake'
		) as HTMLCollectionOf<HTMLSpanElement>
	)
	const animation = (posX: number) => {
		const random = Math.random() * 100

		return [
			{
				transform: `translateY(${Math.random() * -20}vh)`,
			},
			{
				transform: `translate(${
					Math.round(random) % 2 === 0 ? random * -1 : random - posX
				}vw, 100vh)`,
			},
		]
	}
	snowflakes.forEach((snowflake) => {
		snowflake.style.left = `${Math.floor(Math.random() * 100)}%`
		snowflake.animate(animation(snowflake.getBoundingClientRect().left), {
			duration: Math.floor(Math.random() * 15000) + 1000,
			iterations: Infinity,
		})
	})
}
