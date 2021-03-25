from adafruit_servokit import ServoKit
import time
import RPi.GPIO as GPIO

ledPin= 'GPIO_PZ0'
GPIO.setup(ledPin, GPIO.OUT) #pinLed

perchPin= 'GPIO_PE6'
GPIO.setup(perchPin, GPIO.IN) #Perch

buttonPhasePin = 'LCD_TE' #buttonPhase
GPIO.setup(buttonPhasePin, GPIO.IN)

phase = 2

kit = ServoKit(channels=16)

def IsBirdOnPerch(perch):
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
        phase = 1
    else:
        phase = phase + 1
def reportCurrentPhase():
    numPhase=0
    while numPhase < phase:
        print(numPhase)
        GPIO.output(ledPin, True)
        time(0.5)
        GPIO.output(ledPin, False)
        numPhase = numPhase + 1

def PhaseOne(): #Open servo and dont close it
    #reportCurrentPhase()
    OpenServo()

def PhaseTwo(x): #Open servo if bird is on perch and close when he leaves
    #reportCurrentPhase()
    if(IsBirdOnPerch(x)):
        CloseServo()
    else:
        OpenServo()

def PhaseThree(): #Open servo if object = what we want, 30s then close Servo
    reportCurrentPhase()
    OpenServo()
    time(3)
    CloseServo()
def main():
    while True:
        x=GPIO.input(buttonPhasePin)
        perch=GPIO.input(perchPin)
        print(x)
        if x == 0:
            ChangePhase()
        if phase == 1:
            PhaseOne()
        elif phase == 2:
            PhaseTwo(perch)
        elif phase == 3:
            PhaseThree()

if __name__ == '__main__':
    main()

