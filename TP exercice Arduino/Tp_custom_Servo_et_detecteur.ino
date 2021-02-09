#include <Servo.h>
Servo myServo;

const int onLight = 2;
const int offLight = 3;
const int motor = 9;
const int sensorSwitch = A0;

int sensorValue = 0;



void setup() {
  myServo.attach(9);

  Serial.begin(9600);

  pinMode(onLight, OUTPUT);
  pinMode(offLight, OUTPUT);

  digitalWrite(onLight, LOW);
  digitalWrite(offLight, HIGH);
  

}

void loop() {
  sensorValue = analogRead(sensorSwitch);
  Serial.println(sensorValue);

  if (sensorValue < 550) {
      myServo.write(2500);
      digitalWrite(onLight, HIGH);
      digitalWrite(offLight, LOW);
  }
  else {
      myServo.write(0);
      digitalWrite(onLight, LOW);
      digitalWrite(offLight, HIGH);
  }
delay(150);
}
