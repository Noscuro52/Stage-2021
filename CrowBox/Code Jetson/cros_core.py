from adafruit_servokit import ServoKit
import time
import RPi.GPIO as GPIO

GPIO.setup(13, GPIO.OUT) #pinLed
GPIO.setup(2, GPIO.OUT) #Perch

buttonPhasePin = 'LCD_TE' #buttonPhase
GPIO.setup(buttonPhasePin, GPIO.IN)

phase = 0

kit = ServoKit(channels=16)

def IsBirdOnPerch():
    if perch == True:
        return True
    else:
        return False

def OpenServo():
    time.sleep(2)
    kit.servo[0].angle = 0

def CloseServo():
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

def ChangePhase():
    if phase == 3:
        phase =0
    else:
        phase = phase + 1
def reportCurrentPhase():
    while x < phase:
        print(x)
        GPIO.output(13, True)

def PhaseOne(): #Open servo and dont close it
    OpenServo()

def PhaseTwo(): #Open servo if bird is on perch and close when he leaves
    if(IsBirdOnPerch()):
        OpenServo()
    else:
        CloseServo()

def PhaseThree(): #Open servo if object = what we want, 30s then close Servo

def main():
    while True:
    x=GPIO.input(inPin)
    print(x)
    if x == 0:
        Open()
        time.sleep(3)
        Close()  
    time.sleep(1)


if __name__ == '__main__':
    main()

