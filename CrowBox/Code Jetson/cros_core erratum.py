from adafruit_servokit import ServoKit
import time
import RPi.GPIO as GPIO
import json, requests

ledPin= 'GPIO_PZ0' #31
GPIO.setup(ledPin, GPIO.OUT) #Led

perchPin= 'GPIO_PE6' #32
GPIO.setup(perchPin, GPIO.IN) #Perch

buttonPhasePin = 'LCD_TE' #15
GPIO.setup(buttonPhasePin, GPIO.IN) #buttonPhase

kit = ServoKit(channels=16) #3 SDA, 5 SCL

phase = 1

INITIALSERVOPOSITION = 0
FINALSERVOPOSITION = 180
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
    if phase == 3: #after third phase; return to phase 1
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

def getInputAi(dataTest): #analyse JSON data of detection
    last = len(dataTest)

    user = dataTest[last -1] #get last element detected

    if not user['objects']: #if no object detected return false
        return False
    else :
        confidence = user['objects'][0]['confidence'] #if object detected get accuracy of detection

        if (confidence > 0.9) : #if accuracy is more than 90%; return true
            return True
        else :
            return False #if accuracy is less than 90%; return false

def PhaseOne(): #Open servo and dont close it
    reportCurrentPhase()
    OpenServo()

def PhaseTwo(x): #Open servo if bird is on perch and close when he leaves
    reportCurrentPhase()
    if(IsBirdOnPerch(x)):
        CloseServo()
    else:
        OpenServo()

def PhaseThree(): #Open servo if object = what we want, 15s then close Servo
    reportCurrentPhase()
    url = requests.get("http://localhost:8070/") #port where detection in JSON is sent
    text = url.text
    data = json.loads(text) 
    if(getInputAi(data)): #if object detection is true, Open Servo
        OpenServo()
        time.sleep(15)
    else :
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

