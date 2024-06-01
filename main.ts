radio.setGroup(1)

const carMotor = (sl: number = 0, sr: number = 0): void => {
    if (sl === 0 && sr === 0) { PCAmotor.MotorStopAll(); return; }
    let ul = Math.map(sl, -100, 100, -255, 255)
    let ur = Math.map(sr, -100, 100, -230, 230)

    PCAmotor.MotorRun(PCAmotor.Motors.M2, -1 * ul)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, -1 * ur)
}
 
radio.onReceivedString(function (receivedString: string) {
    if (receivedString == "B,99") {
        carMotor(80, 50)
    }
    else if (receivedString == "A,88") {
        carMotor(50, 100)
    }
    else if (receivedString == "P,123") {
        carMotor(90, 100)
    }
    else if (receivedString == "L,356") {
        carMotor(0, 0)
    }
    else if (receivedString == "D,99") {
        carMotor(-100, -100)
    }
})




