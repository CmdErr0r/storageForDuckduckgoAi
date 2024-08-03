document.getElementById("load").onclick = Load
document.getElementById("save").onclick = Save

function Load() {
    browser.runtime.sendMessage({action: "load"})
}

function Save() {
    browser.runtime.sendMessage({action: "save"})
}