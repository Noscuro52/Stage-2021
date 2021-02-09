const int sensorPin = A0;
const int motorPin = 9;

void setup() {
  Serial.begin(9600);
  pinMode(motorPin, OUTPUT);
  

}

void loop() {
  int sensorVal = analogRead(sensorPin);
  float voltage = (sensorVal/1024.0) * 5.0;
  float temperature = (voltage - .5) * 100;
  Serial.println(temperature);

  if(temperature > 19.0) {
    digitalWrite(motorPin, HIGH);
  }
  else {
    digitalWrite(motorPin, LOW);
  }
  delay(1000);
}
