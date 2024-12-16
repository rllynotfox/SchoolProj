password = "1234"

document.getElementById("settings-o").addEventListener("click", (ev) => {
    document.getElementById("pass-wrapper").style.display = "flex"
})

document.getElementById("pass-close").addEventListener("click", (ev) => {
    document.getElementById("pass-wrapper").style.display = "none"
    document.getElementById("pass-alert").style.display = "none"
    document.getElementById("pass-input").value = ""

})

document.getElementById("pass-go").addEventListener("click", (ev) => {
    if (document.getElementById("pass-input").value == password) {
        alert("ok")
        document.getElementById("pass-wrapper").style.display = "none"
        document.getElementById("pass-alert").style.display = "none"
        document.getElementById("pass-input").value = ""
    } else {
        document.getElementById("pass-input").value = ""
        document.getElementById("pass-alert").style.display = "block"
    }
})