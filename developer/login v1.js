
// adatok
let name = "admin"
let pass = "01"
var ok = 0
let i = 1

// bejelentkezés
do {

    let name1 = prompt("Név:")
    let pass1 = prompt("Jelszó:")

    if (name==name1) {
        
        if (pass==pass1) {
            
            var ok = 1
            alert("Üdv!")
            
        } else {
            
            alert("Hibás név vagy jelszó!")

        }

    } else {
        alert("Hibás név vagy jelszó!")
    }
} while (i>ok);

console.log("ver 1")