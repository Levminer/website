
// adatok
let name = "admin"
let pass = "01"
let ok = 0
let i = 1

// bejelentkezés
do {

    let name1 = prompt("Név:")
    let pass1 = prompt("Jelszó:")

    if (name==name1&&pass==pass1) {
     
        alert("Üdv!")

        ok = 1 

    } else {

        alert("Hibás név vagy jelszó!")

    }

} while (i>ok);

//verzio
console.log("ver 2")