//! Készítette: Lőrik Levente
//! 2020.01.10

//? Ha lejár az idő valamiért kiírja hogy 1.szint vesztettél tisztázatlan okokból
//? Csak másodszorra marad u.a az idő

//variables

let level = 0
let counter = 0
let tcounter = 0
let the_timer = 0
let time = 0
let interval = 0

let level_login, level_password, level_passwordreminder, level_onetimepassword
let level_log, level_pass, level_pwr, level_otp

//start

function start() {
	switch (level) {
		case 1:
			level1()

			break

		case 2:
			level2()

			break

		case 3:
			level3()

			break

		case 4:
			level4()

			break

		case 5:
			level5()

			break

		default:
			level1()

			break
	}
}

//timer

function timer_0() {
	let first = document.getElementById("first")
	first.style.display = "none"
	let second = document.getElementById("second")
	second.style.display = "block"

	document.getElementById("timer").innerHTML = the_timer + " másodperc maradt!"

	interval = setInterval(timer_1, 1000)
}

function timer_1() {
	the_timer -= 1
	console.log("Timer:" + the_timer)
	document.getElementById("timer").innerHTML = the_timer + " másodperc maradt!"

	if (the_timer == 0) {
		clearInterval(interval)
		counter = 0
		time = 0
		the_timer = 300
		level = 1
		start()
		alert("Vesztettél! Játék újrakezdése!")
	}
}

// 1. szint

function level1() {
	let level_login = "robi60"
	let level_password = "1234"

	let level_log = document.getElementById("log").value
	let level_pas = document.getElementById("pas").value

	if (tcounter == 0) {
		the_timer = 300
		time++
		tcounter++
	}

	if (level_login == level_log && level_password == level_pas) {
		alert("Sikeres bejelentkezés! (1.szint)")

		document.getElementById("log").value = ""
		document.getElementById("pas").value = ""
		document.getElementById("pwr").value = ""
		document.getElementById("otp").value = ""

		level = 2

		counter = 0

		the_timer = 240

		clearInterval(interval)
	} else {
		alert("Sikertelen bejelentkezés! (1.szint)")
		document.getElementById("log").value = ""
		document.getElementById("pas").value = ""
		document.getElementById("pwr").value = ""
		document.getElementById("otp").value = ""

		level = 1

		time = 0

		clearInterval(interval)

		counter++
		console.log("Counter:" + counter)
		if (counter == 20) {
			alert("Vesztettél! Játék újrakezdése!")
			counter = 0
			level = 1
			clearInterval(interval)
		}
	}

	timer_0()
}

// 2. szint

function level2() {
	let level_login = "natika1"
	let level_password = "702088"

	let level_log = document.getElementById("log").value
	let level_pas = document.getElementById("pas").value

	if (tcounter == 1) {
		the_timer = 240
		time++
		tcounter++
	}

	if (level_login == level_log && level_password == level_pas) {
		alert("Sikeres bejelentkezés! (2.szint)")

		document.getElementById("log").value = ""
		document.getElementById("pas").value = ""
		document.getElementById("pwr").value = ""
		document.getElementById("otp").value = ""

		level = 3

		counter = 0

		clearInterval(interval)
	} else {
		alert("Sikertelen bejelentkezés! (2.szint)")
		document.getElementById("log").value = ""
		document.getElementById("pas").value = ""
		document.getElementById("pwr").value = ""
		document.getElementById("otp").value = ""

		level = 2

		time = 0

		clearInterval(interval)

		counter++
		console.log("Counter:" + counter)
		if (counter == 15) {
			alert("Vesztettél! Játék újrakezdése!")
			counter = 0
			level = 1
		}
	}

	timer_0()
}

// 3.szint

function level3() {
	let level_login = "szigethi69"
	let level_password = "akarokegypirossubarut"
	let level_passwordreminder = "subarusvx"

	let level_log = document.getElementById("log").value
	let level_pas = document.getElementById("pas").value
	let level_pwr = document.getElementById("pwr").value

	if (tcounter == 2) {
		the_timer = 180
		time++
		tcounter++
	}

	if (level_login == level_log && level_password == level_pas && level_passwordreminder == level_pwr) {
		alert("Sikeres bejelentkezés! (3.szint)")

		document.getElementById("log").value = ""
		document.getElementById("pas").value = ""
		document.getElementById("pwr").value = ""
		document.getElementById("otp").value = ""

		level = 4

		counter = 0

		clearInterval(interval)
	} else {
		alert("Sikertelen bejelentkezés! (3.szint)")
		document.getElementById("log").value = ""
		document.getElementById("pas").value = ""
		document.getElementById("pwr").value = ""
		document.getElementById("otp").value = ""

		level = 3

		time = 0

		clearInterval(interval)

		counter++
		console.log("Counter:" + counter)
		if (counter == 10) {
			alert("Vesztettél! Játék újrakezdése!")
			counter = 0
			level = 1
		}
	}

	timer_0()
}

// 4.szint

function level4() {
	let level_login = "danifortnite"
	let level_password = "fortnitelama"
	let level_passwordreminder = "pizza"
	let level_onetimepassword = "201015"

	let level_log = document.getElementById("log").value
	let level_pas = document.getElementById("pas").value
	let level_pwr = document.getElementById("pwr").value
	let level_otp = document.getElementById("otp").value

	if (tcounter == 3) {
		the_timer = 120
		time++
		tcounter++
	}

	if (
		level_login == level_log &&
		level_password == level_pas &&
		level_passwordreminder == level_pwr &&
		level_onetimepassword == level_otp
	) {
		alert("Sikeres bejelentkezés! (4.szint)")

		document.getElementById("log").value = ""
		document.getElementById("pas").value = ""
		document.getElementById("pwr").value = ""
		document.getElementById("otp").value = ""

		level = 5

		counter = 0

		clearInterval(interval)
	} else {
		alert("Sikertelen bejelentkezés! (4.szint)")
		document.getElementById("log").value = ""
		document.getElementById("pas").value = ""
		document.getElementById("pwr").value = ""
		document.getElementById("otp").value = ""

		level = 4

		time = 0

		clearInterval(interval)

		counter++
		console.log("Counter:" + counter)
		if (counter == 5) {
			alert("Vesztettél! Játék újrakezdése!")
			counter = 0
			level = 1
		}
	}

	timer_0()
}

//5. szint

function level5() {
	clearInterval(interval)
	the_timer = 0

	alert("Miközben megpróbáltad feltörni Elon fiókját az FBI rádrúgta az ajtót és letartóztattak!")

	document.getElementById("log").value = ""
	document.getElementById("pas").value = ""
	document.getElementById("pwr").value = ""
	document.getElementById("otp").value = ""

	let first = document.getElementById("first")
	first.style.display = "block"
	let second = document.getElementById("second")
	second.style.display = "none"

	let mes = document.getElementById("mes")
	mes.style.display = "none"
	let fbi = document.getElementById("fbi")
	fbi.style.display = "block"
}
