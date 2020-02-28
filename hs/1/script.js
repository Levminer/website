//start
let level = 0
let counter = 0

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
// 1. szint
function level1() {
	let level1_login = "robi60"
	let level1_password = "1234"

	let level1_log = document.getElementById("log").value
	let level1_pas = document.getElementById("pas").value

	if (level1_login == level1_log && level1_password == level1_pas) {
		alert("Sikeres bejelentkezés! (1.szint)")

		document.getElementById("log").value = ""
		document.getElementById("pas").value = ""
		document.getElementById("pwr").value = ""
		document.getElementById("otp").value = ""

		level = 2

		counter = 0
	} else {
		alert("Sikertelen bejelentkezés! (1.szint)")
		document.getElementById("log").value = ""
		document.getElementById("pas").value = ""
		document.getElementById("pwr").value = ""
		document.getElementById("otp").value = ""

		level = 1

		counter++
		console.log(counter)

		if (counter == 20) {
			alert("Vesztettél! Játék újrakezdése!")
			counter = 0
			level = 1
		}
	}
}
// 2. szint
function level2() {
	let level2_login = "natika1"
	let level2_password = "702088"

	let level2_log = document.getElementById("log").value
	let level2_pas = document.getElementById("pas").value

	if (level2_login == level2_log && level2_password == level2_pas) {
		alert("Sikeres bejelentkezés! (2.szint)")

		document.getElementById("log").value = ""
		document.getElementById("pas").value = ""
		document.getElementById("pwr").value = ""
		document.getElementById("otp").value = ""

		level = 3

		counter = 0
	} else {
		alert("Sikertelen bejelentkezés! (2.szint)")

		document.getElementById("log").value = ""
		document.getElementById("pas").value = ""
		document.getElementById("pwr").value = ""
		document.getElementById("otp").value = ""

		level = 2

		counter++
		console.log(counter)

		if (counter == 15) {
			alert("Vesztettél! Játék újrakezdése!")
			counter = 0
			level = 1
		}
	}
}
// 3.szint
function level3() {
	let level3_login = "szigethi69"
	let level3_password = "akarokegypirossubarut"
	let level3_passwordreminder = "subarusvx"

	let level3_log = document.getElementById("log").value
	let level3_pas = document.getElementById("pas").value
	let level3_pwr = document.getElementById("pwr").value

	if (
		level3_login == level3_log &&
		level3_password == level3_pas &&
		level3_passwordreminder == level3_pwr
	) {
		alert("Sikeres bejelentkezés! (3.szint)")

		document.getElementById("log").value = ""
		document.getElementById("pas").value = ""
		document.getElementById("pwr").value = ""
		document.getElementById("otp").value = ""

		level = 4

		counter = 0
	} else {
		alert("Sikeretelen bejelentkezés! (3.szint)")

		document.getElementById("log").value = ""
		document.getElementById("pas").value = ""
		document.getElementById("pwr").value = ""
		document.getElementById("otp").value = ""

		level = 3

		counter++
		console.log(counter)

		if (counter == 10) {
			alert("Vesztettél! Játék újrakezdése!")
			counter = 0
			level = 1
		}
	}
}
// 4.szint
function level4() {
	let level4_login = "danifortnite"
	let level4_password = "fortniteláma"
	let level4_passwordreminder = "pizza"
	let level4_onetimepassword = "201015"

	let level4_log = document.getElementById("log").value
	let level4_pas = document.getElementById("pas").value
	let level4_pwr = document.getElementById("pwr").value
	let level4_otp = document.getElementById("otp").value

	if (
		level4_login == level4_log &&
		level4_password == level4_pas &&
		level4_passwordreminder == level4_pwr &&
		level4_onetimepassword == level4_otp
	) {
		alert("Sikeres bejelentkezés! (4.szint)")

		document.getElementById("log").value = ""
		document.getElementById("pas").value = ""
		document.getElementById("pwr").value = ""
		document.getElementById("otp").value = ""

		level = 5

		counter = 0
	} else {
		alert("Sikertelen bejelentkezés! (4.szint)")

		document.getElementById("log").value = ""
		document.getElementById("pas").value = ""
		document.getElementById("pwr").value = ""
		document.getElementById("otp").value = ""

		level = 4

		counter++
		console.log(counter)

		if (counter == 5) {
			alert("Vesztettél! Játék újrakezdése!")
			counter = 0
			level = 1
		}
	}
}
//5. szint
function level5() {
	alert(
		"Miközben megpróbáltad feltörni Elon fiókját az FBI rádrúgta az ajtót és letartóztattak!"
	)

	document.getElementById("pwr").value = ""
	document.getElementById("otp").value = ""

	let mes = document.getElementById("mes")
	mes.style.display = "none"
	let fbi = document.getElementById("fbi")
	fbi.style.display = "block"
}
