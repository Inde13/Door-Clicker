function formatNum(x) {
								power = Math.log10(x)
								mantissa = x / power
								if (power < 6) {
																return x.toFixed(2)
								}
								return `${mantissa.toFixed(2)}e${power}`
}

function saveData(dataKey, dataValue) {
								localStorage.setItem(dataKey, dataValue)
}

function loadData(dataKey) {
								return localStorage.getItem(dataKey)
}
