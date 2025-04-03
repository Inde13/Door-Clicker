const availableUpgColor = "rgb(30, 255, 50)"
const unavailableUpgColor = "rgb(255, 30, 50)"

var doorSwitch = true
var doors = 0
var doorsClosed = 10

var upgrades = {
								moreDoors: {
																current: 0,
																price: 10
								}
}

updateAll()

function switchDoorState() {
								if (doors == 0) {
																return
								}
								doorSwitch = !doorSwitch
								btn = document.getElementsByClassName("doorSwitch")[0]
								if (doorSwitch == false) {
																doorsClosed += doors
																btn.textContent = "Open door"
																btn.style.background = "rgb(210, 210, 210)"
								} else {
																btn.textContent = "Close door"
																btn.style.background = "rgb(240, 240, 240)"
								}
								updateAll()
}

function buyNewDoor() {
								if (doorsClosed >= upgrades.moreDoors.price) {
																doors++
																upgrades.moreDoors.price *= 1.35
																upgrades.moreDoors.current++
								}
								
								updateAll()
}

function updateCurrencies() {
								currencies = document.getElementsByClassName("currency")
								dc = currencies[0]
								dc.textContent = "Doors closed: " + formatNum(doorsClosed)
}

function updateUpgButton(buttonClassName, upgObj) {
								btn = document.getElementsByClassName(buttonClassName)[0]
								btnCurrent = btn.querySelector(".current")
								btnPrice = btn.querySelector(".price")
								
								btnCurrent.textContent = "Current: " + formatNum(upgObj.current)
								btnPrice.textContent = `Price ${formatNum(upgObj.price)} Closed doors`
								
								if (doorsClosed >= upgObj.price) {
																btn.style.border = `2px solid ${availableUpgColor}`
								} else {
																btn.style.border = `2px solid ${unavailableUpgColor}`
								}
}

function updateAll() {
								updateCurrencies()
								
								updateUpgButton("buyNewDoor", upgrades.moreDoors)
}