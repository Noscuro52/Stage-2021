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
    global currentServoPosition
    time.sleep(2)
    kit.servo[0].angle = INITIALSERVOPOSITION
    currentServoPosition = INITIALSERVOPOSITION

def CloseServo(): #close with small steps so that the bird has time to leave
    global currentServoPosition
    i = 0
    while(i <= FINALSERVOPOSITION):
        if currentServoPosition != FINALSERVOPOSITION:
            i = i + step
            kit.servo[0].angle = i
            currentServoPosition = i           
            time.sleep(0.75)
        else:
            i = i + step

def ChangePhase(): #Press button to change phase
    global phase
    if phase == 3:       
        phase = 1
    else:
        phase = phase + 1
        return phase
def reportCurrentPhase():
    numPhase=0
    print(phase)
"""     while numPhase < phase:
        
        GPIO.output(ledPin, True)
        time.sleep(0.5)
        GPIO.output(ledPin, False)
        numPhase = numPhase + 1 """

def PhaseOne(): #Open servo and dont close it
    reportCurrentPhase()
    OpenServo()

def PhaseTwo(x): #Open servo if bird is on perch and close when he leaves
    reportCurrentPhase()
    if(IsBirdOnPerch(x)):
        CloseServo()
    else:
        OpenServo()

def PhaseThree(): #Open servo if object = what we want, 30s then close Servo
    reportCurrentPhase()
    OpenServo()
    time.sleep(3)
    CloseServo()
def main():
    while True:
        x=GPIO.input(buttonPhasePin)
        perch=GPIO.input(perchPin)
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

