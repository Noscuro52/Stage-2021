from adafruit_servokit import ServoKit
import time
import RPi.GPIO as GPIO

#GPIO.setmode(GPIO.BOARD)
inPin = 'LCD_TE'
GPIO.setup(inPin, GPIO.IN)
kit= ServoKit(channels=16)

def Open():
    time.sleep(2)
    kit.servo[0].angle = 0
def Close():
    kit.servo[0].angle=15
    time.sleep(0.75)
    kit.servo[0].angle=30
    time.sleep(0.75)
    kit.servo[0].angle=45
    time.sleep(0.75)
    kit.servo[0].angle=60
    time.sleep(0.75)
    kit.servo[0].angle=75
    time.sleep(0.75)
    kit.servo[0].angle=90

while True:
    x=GPIO.input(inPin)
    print(x)
    if x == 0:
        Open()
        time.sleep(3)
        Close()  
    time.sleep(1)

