function formatNum(x) {
	power = Math.log10(x)
	mantissa = x / power
	if (power < 6) {
		return x.toFixed(2)
	}
	return `${mantissa.toFixed(2)}e${power}`
}
