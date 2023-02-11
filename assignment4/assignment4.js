let btn = document.querySelector(".btn1")
btn.addEventListener('click', function openPopup() {
    popup.classList.add("open-popup");
})

let btnc = document.querySelector(".btn3")
btnc.addEventListener('click', function closePopup() {
    popup.classList.remove("open-popup");
})


let btn1 = document.querySelector(".btnPrimary")
btn1.addEventListener('click', function openPopup1() {
    popup1.classList.add("open-popup1");
})

let btnc1 = document.querySelector(".btn4")
btnc1.addEventListener('click', function closePopup1() {
    popup1.classList.remove("open-popup1");
})

document.getElementById("password2").addEventListener("click", function () {
    alert("password must be 10 characters or more, must have at least one uppercase, one number and one special character")
  })
document.getElementById("signup2").addEventListener("click", function () {
        pswcheck2()
})

let msg2 = document.getElementById("message2")
function pswcheck2() {
    let psw2 = document.getElementById("password2").value
    if (psw2.length < 10) {
        msg2.innerHTML = "password length must be 10 characters or more."
        msg2.style.color = "red"
        return false
    }
    else if (psw2.search(/[0-9]/) == -1) {
        msg2.innerHTML = "At least have one number"
        msg2.style.color = "red"
        return false
    }
    else if (psw2.search(/[A-Z]/) == -1) {
     
        msg2.innerHTML= "At least have one uppercase"
        msg2.style.color = "red"
        return false
    }
    else if (psw2.search(/[!@#$%^&*()_+-=\[\]{};"\\,.<>]/) == -1) {
        msg2.innerHTML = "At least have one special character"
        msg2.style.color = "red"
        return false
    }
    else{
        msg2.innerHTML= "Success"
        msg2.style.color = "green"
        return true
    }
}
document.getElementById("password1").addEventListener("click", function () {
    alert("password must be 10 characters or more, must have at least one uppercase, one number and one special character")
  })

document.getElementById("login").addEventListener("click", function () {
          pswcheck1()
     
  })
let msg1 = document.getElementById("message1")
function pswcheck1() {
    let psw1 = document.getElementById("password1").value
    if (psw1.length < 10) {
        msg1.innerHTML = "password length must be 10 characters or more."
        msg1.style.color = "red"
        return false
    }
    else if (psw1.search(/[0-9]/) == -1) {
        msg1.innerHTML = "At least have one number"
        msg1.style.color = "red"
        return false
    }
    else if (psw1.search(/[A-Z]/) == -1) {
     
        msg1.innerHTML= "At least have one uppercase"
        msg1.style.color = "red"
        return false
    }
    else if (psw1.search(/[!@#$%^&*()_+-=\[\]{};"\\,.<>]/) == -1) {
        msg1.innerHTML = "At least have one special character"
        msg1.style.color = "red"
        return false
    }
    else{
        msg1.innerHTML= "Success"
        msg1.style.color = "green"
        return true
    }
}
