import Jetson.GPIO as GPIO

GPIO.setup(13, GPIO.OUT) #pinLed

GPIO.setup(9, GPIO.OUT) #Servo

GPIO.setup(2, GPIO.OUT) #Perch

buttonPhasePin = 'DAP4_SCLK'
 #buttonPhase

phase = 0

kit = Servokit(channel=16)

def main():
    GPIO.setmode(GPIO.BOARD)
    GPIO.setup(buttonPhasePin, GPIO.IN)

    GPIO.cleanup()


def IsBirdOnPerch():
    if :
        return True
    else:
        return False

def OpenServo():
    kit.servo[0].angle=360

def CloseServo():
    kit.servo[0].angle=315
    kit.servo[0].angle=270
    kit.servo[0].angle=225
    kit.servo[0].angle=180
    kit.servo[0].angle=135
    kit.servo[0].angle=90
    kit.servo[0].angle=45
    kit.servo[0].angle=0

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
    if(IsBirdOnPerch):
        OpenServo()
    else:
        CloseServo()

def PhaseThree(): #Open servo if object = what we want, 30s then close Servo


if __name__ == '__main__':
    main()

