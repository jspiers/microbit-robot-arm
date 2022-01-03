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
    updown = -1
    basic.showArrow(ArrowNames.South)
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
    if (angle < 100) {
        angle += 1
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, angle)
    }
}
function clawup () {
    if (angle > 20) {
        angle += -1
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, angle)
    }
}
devices.onGamepadButton(MesDpadButtonInfo.ADown, function () {
    updown = 1
    basic.showArrow(ArrowNames.North)
})
function clawclose () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -80)
    basic.showIcon(IconNames.SmallDiamond)
}
devices.onGamepadButton(MesDpadButtonInfo.BUp, function () {
    updown = 0
})
function clawopen () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 80)
    basic.showIcon(IconNames.Square)
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
devices.onGamepadButton(MesDpadButtonInfo.AUp, function () {
    updown = 0
})
devices.onGamepadButton(MesDpadButtonInfo.CUp, function () {
    stop()
})
let updown = 0
let angle = 0
bluetooth.startLEDService()
angle = 90
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, angle)
updown = 0
loops.everyInterval(100, function () {
    if (updown < 0) {
        clawdown()
    } else if (updown > 0) {
        clawup()
    }
})
