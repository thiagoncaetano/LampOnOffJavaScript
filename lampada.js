const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')
const corFundo = window.document.body

function isLampBroken() {
    return lamp.src.indexOf ('lampadabroken') > -1
}

function lampOn() {
    if ( !isLampBroken()) {
    lamp.src = './img/lampadaon.jpg'
    corFundo.style.background = 'black'
    }
}

function lampOff() {
    if ( !isLampBroken()) {
    lamp.src = './img/lampadaoff.jpg'
    corFundo.style.background = 'white'
    }
}

function lampBroken() {
    lamp.src = './img/lampadabroken.jpg'
    corFundo.style.background = 'white'
}

turnOn.addEventListener ('click', lampOn)
turnOff.addEventListener ('click', lampOff)
lamp.addEventListener ('mouseover', lampOn)
lamp.addEventListener ('mouseleave', lampOff)
lamp.addEventListener ('dblclick', lampBroken)
