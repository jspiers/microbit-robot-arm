devices.onGamepadButton(MesDpadButtonInfo.DUp, function () {
    stop()
})
function turnright () {
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 20)
    basic.showArrow(ArrowNames.East)
}
bluetooth.onBluetoothConnected(function () {
    soundExpression.hello.play()
})
function stop () {
    wuKong.stopAllMotor()
    basic.clearScreen()
}
devices.onGamepadButton(MesDpadButtonInfo.BDown, function () {
    clawdown()
})
devices.onGamepadButton(MesDpadButtonInfo._2Down, function () {
    clawopen()
})
devices.onGamepadButton(MesDpadButtonInfo.DDown, function () {
    turnright()
})
devices.onGamepadButton(MesDpadButtonInfo.CDown, function () {
    turnleft()
})
function clawdown () {
    if (v < 100) {
        v += 5
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, v)
    }
}
function clawup () {
    if (v > 20) {
        v += -5
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, v)
    }
}
devices.onGamepadButton(MesDpadButtonInfo.ADown, function () {
    clawup()
})
function clawclose () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -80)
    basic.showIcon(IconNames.Square)
}
function clawopen () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 80)
    basic.showIcon(IconNames.SmallDiamond)
}
devices.onGamepadButton(MesDpadButtonInfo._1Down, function () {
    clawclose()
})
devices.onGamepadButton(MesDpadButtonInfo._2Up, function () {
    stop()
})
devices.onGamepadButton(MesDpadButtonInfo._1Up, function () {
    stop()
})
function turnleft () {
    wuKong.setMotorSpeed(wuKong.MotorList.M2, -20)
    basic.showArrow(ArrowNames.West)
}
devices.onGamepadButton(MesDpadButtonInfo.CUp, function () {
    stop()
})
let v = 0
bluetooth.startLEDService()
v = 90
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, v)
