from adafruit_servokit import ServoKit
import time
import RPi.GPIO as GPIO

#GPIO.setmode(GPIO.BOARD)
inPin = 'LCD_TE'
ledPin= 'GPIO_PZ0'
perchPin= 'GPIO_PE6'
GPIO.setup(inPin, GPIO.IN)
GPIO.setup(perchPin, GPIO.IN)
GPIO.setup(ledPin, GPIO.OUT)
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
    y=GPIO.input(perchPin)
    print(y)
    if x == 0:
        Open()
        GPIO.output(ledPin, True)
        time.sleep(3)
        GPIO.output(ledPin, False)
        Close()  
    time.sleep(1)

