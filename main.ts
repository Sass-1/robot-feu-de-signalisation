let interval = 0
let elapsed = 0
let distance = 0
function emergency_stop () {
    cuteBot.motors(0, 0)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    music.playTone(100, 500)
    basic.pause(1000)
}
function safe_run (motor_speed_left: number, motor_speed_right: number, duration: number) {
    interval = 200
    while (elapsed < duration) {
        if (check_obstacle()) {
            emergency_stop()
            cuteBot.motors(-20, -20)
            basic.pause(500)
            cuteBot.motors(0, 0)
            return
        } else {
            cuteBot.motors(motor_speed_left, motor_speed_right)
        }
        basic.pause(interval)
        elapsed += interval
    }
}
function check_obstacle () {
    distance = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (distance > 0 && distance < 15) {
        return true
    }
    return false
}
function feu_vert_safe () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    music.playTone(600, 100)
    safe_run(35, 35, 5000)
}
function feu_orange_safe () {
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        . . # . .
        `)
    music.playTone(400, 100)
    safe_run(20, 20, 3000)
}
function feu_rouge_safe () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    music.playTone(200, 100)
    cuteBot.motors(0, 0)
    basic.pause(2000)
}
basic.forever(function () {
    feu_vert_safe()
    feu_orange_safe()
    feu_rouge_safe()
})
