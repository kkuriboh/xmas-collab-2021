export default function generateGradient(): String[] {
	const colors = [
		'247, 118, 142',
		'158, 206, 106',
		'224, 175, 104',
		'122, 162, 247',
		'173, 142, 230',
		'68, 157, 171',
	]
	const gradient = [colors[Math.floor(Math.random() * colors.length)]]
	while (gradient.length !== 2) {
		const randomColor = colors[Math.floor(Math.random() * colors.length)]
		if (randomColor !== gradient[0]) {
			gradient.push(randomColor)
		}
	}
	return gradient
}
