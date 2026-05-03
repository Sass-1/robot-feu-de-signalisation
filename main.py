def check_obstacle():
    distance = cuteBot.ultrasonic(cuteBot.SonarUnit.CENTIMETERS)
    if distance > 0 and distance < 15:
        return True
    return False

def emergency_stop():
    cuteBot.motors(0, 0)
    basic.show_leds("""
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        """)
    music.play_tone(100, 500)
    basic.pause(1000)

def safe_run(motor_speed_left, motor_speed_right, duration):
    elapsed = 0
    interval = 200
    while elapsed < duration:
        if check_obstacle():
            emergency_stop()
            cuteBot.motors(-20, -20)
            basic.pause(500)
            cuteBot.motors(0, 0)
            return
        else:
            cuteBot.motors(motor_speed_left, motor_speed_right)
        basic.pause(interval)
        elapsed += interval

def feu_orange_safe():
    basic.show_leds("""
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        . . # . .
        """)
    music.play_tone(400, 100)
    safe_run(20, 20, 3000)

def feu_vert_safe():
    basic.show_leds("""
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        """)
    music.play_tone(600, 100)
    safe_run(35, 35, 5000)

def feu_rouge_safe():
    basic.show_leds("""
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        """)
    music.play_tone(200, 100)
    cuteBot.motors(0, 0)
    basic.pause(2000)

def on_forever():
    feu_vert_safe()
    feu_orange_safe()
    feu_rouge_safe()

basic.forever(on_forever)