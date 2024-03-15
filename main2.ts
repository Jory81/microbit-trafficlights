radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        radio.sendNumber(1)
    } else if (receivedNumber == 0) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
        radio.sendNumber(0)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
radio.setGroup(1)
pins.digitalWritePin(DigitalPin.P2, 1)