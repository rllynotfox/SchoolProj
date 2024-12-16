let password

if (localStorage.getItem("password")) {
    password = localStorage.getItem("password")
} else {
    password = "admin"
    localStorage.setItem("password", "admin")
}

document.getElementById("select1").addEventListener("click", (ev) => {
    if (document.getElementById("select1").classList.contains("cdelete")) {
        document.getElementById("teacher1").classList.add("cfree")
        document.getElementById("teacher1").innerText = "Кабинет свободен"
        document.getElementById("select1").classList.remove("cdelete")
        document.getElementById("select1").innerText = "Занять"
    }  else {
        document.getElementById("teachers-wrapper").style.display = "flex"
    }
})

document.getElementById('select-teach1').addEventListener("click", (ev) => {
    document.getElementById("select1").classList.add("cdelete")
    document.getElementById("teacher1").innerText = "Платонов Вячеслав Дмитреивич"
    document.getElementById("teachers-wrapper").style.display = "none"
    document.getElementById("teacher1").classList.remove("cfree")


})

document.getElementById("teachers-close").addEventListener("click",(ev) => {
    document.getElementById("teachers-wrapper").style.display = "none"

})

document.getElementById("settings-o").addEventListener("click", (ev) => {
    document.getElementById("pass-wrapper").style.display = "flex"
})

document.getElementById("pass-close").addEventListener("click", (ev) => {
    document.getElementById("pass-wrapper").style.display = "none"
    document.getElementById("pass-alert").style.display = "none"
    document.getElementById("pass-input").value = ""

})

document.getElementById("save-password").addEventListener("click", (ev) => {
    password = document.getElementById("newpass-field").value
    localStorage.setItem("password", password)
    alert("Пароль обновлен")
    document.getElementById("newpass-field").value = ""
})

document.getElementById("cab-list").addEventListener("click", (ev) => {
    document.getElementById("settings-wrapper").style.display = "none"
    document.getElementById("cab-wrapper").style.display = "flex"

}) 

document.getElementById("teacher-list").addEventListener("click", (ev) => {
    document.getElementById("settings-wrapper").style.display = "none"
    document.getElementById("teacher-wrapper").style.display = "flex"

}) 



document.getElementById("settings-close").addEventListener("click", (ev) => {
    document.getElementById("settings-wrapper").style.display = "none"

})

document.getElementById("pass-go").addEventListener("click", (ev) => {
    if (document.getElementById("pass-input").value == password) {
        // alert("ok")
        document.getElementById("settings-wrapper").style.display = "flex"
        document.getElementById("pass-wrapper").style.display = "none"
        document.getElementById("pass-alert").style.display = "none"
        document.getElementById("pass-input").value = ""
    } else {
        document.getElementById("pass-input").value = ""
        document.getElementById("pass-alert").style.display = "block"
    }
})