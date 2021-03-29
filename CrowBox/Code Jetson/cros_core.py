from adafruit_servokit import ServoKit
import time
import RPi.GPIO as GPIO

ledPin= 'GPIO_PZ0' #31
GPIO.setup(ledPin, GPIO.OUT) #Led

perchPin= 'GPIO_PE6' #32
GPIO.setup(perchPin, GPIO.IN) #Perch

buttonPhasePin = 'LCD_TE' #15
GPIO.setup(buttonPhasePin, GPIO.IN) #buttonPhase

kit = ServoKit(channels=16) #3 SDA, 5 SCL

phase = 1

INITIALSERVOPOSITION = 0
FINALSERVOPOSITION = 90
currentServoPosition = 0
step = 15

def IsBirdOnPerch(perch):
    if perch == True:
        return True
    else:
        return False

def OpenServo():
    time.sleep(2)
    kit.servo[0].angle = initialServoPosition
    currentServoPosition = 0

def CloseServo():
    i = 0
    while(i <= finalServoPosition):
        if currentServoPosition != finalServoPosition:
            i = i + step
            kit.servo[0].angle = i
            currentServoPosition = i           
            time.sleep(0.75)
        
"""     kit.servo[0].angle=15
    time.sleep(0.75)
    kit.servo[0].angle=30
    time.sleep(0.75)
    kit.servo[0].angle=45
    time.sleep(0.75)
    kit.servo[0].angle=60
    time.sleep(0.75)
    kit.servo[0].angle=75
    time.sleep(0.75)
    kit.servo[0].angle=90 """

def ChangePhase(phase):
    if phase == 3:
        phase = 1
    else:
        phase = phase + 1
def reportCurrentPhase(phase):
    numPhase=0
    while numPhase < phase:
        print(numPhase)
        GPIO.output(ledPin, True)
        time(0.5)
        GPIO.output(ledPin, False)
        numPhase = numPhase + 1

def PhaseOne(): #Open servo and dont close it
    reportCurrentPhase(phase)
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
            ChangePhase(phase)
        if phase == 1:
            PhaseOne()
        elif phase == 2:
            PhaseTwo(perch)
        elif phase == 3:
            PhaseThree()

if __name__ == '__main__':
    main()

