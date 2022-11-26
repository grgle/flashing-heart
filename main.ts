bluetooth.onBluetoothConnected(function () {
    bluetooth.startButtonService()
})
input.onButtonPressed(Button.A, function () {
    min += 100
})
input.onButtonPressed(Button.AB, function () {
    max = 1023
    min = 0
})
input.onButtonPressed(Button.B, function () {
    max += -100
})
let max = 0
let min = 0
let power = 0
min = 0
max = 1023
basic.forever(function () {
    for (let list = 0; list <= max; list++) {
        power += 1
        pins.analogWritePin(AnalogPin.P0, power)
        basic.pause(1)
        if (power >= max) {
            list = 0
            for (let list = 0; list <= 1023; list++) {
                power += -1
                pins.analogWritePin(AnalogPin.P0, power)
                basic.pause(1)
                if (power <= min) {
                    break;
                }
            }
        }
    }
})
basic.forever(function () {
    led.plotBarGraph(
    power,
    1023
    )
})
