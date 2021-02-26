import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BOARD)
GPIO.setup(13, GPIO.OUT) #pinLed
GPIO.setup(9, GPIO.OUT) #Servo
GPIO.setup(2, GPIO.OUT) #Perch
GPIO.setup(4, GPIO.OUT) #buttonPhase
GPIO.cleanup()

 phase = 0


IsBirdOnPerch()  

GPIO.output(13, True)

OpenServo()

CloseServo()

ChangePhase()

Phase one() #Open servo and dont close it


Phase Two() #Open servo if bird is on perch and close when he leaves

Phase Three() #Open servo if object = what we want, 30s then close Servo

