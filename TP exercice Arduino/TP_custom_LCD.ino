#include <LiquidCrystal.h>
LiquidCrystal lcd(12,11,5,4,3,2);

#define contra 9
#define bri 10
const int sensorPin = A0;

void setup() {
  Serial.begin(9600);
  lcd.begin(16, 2);
  pinMode(contra, OUTPUT);
  pinMode(bri, OUTPUT);
  digitalWrite(contra, LOW);

  analogWrite(bri, 255);

}

void loop() {
  lcd.clear();
  int sensorVal = analogRead(sensorPin);
  float voltage = (sensorVal/1024.0) * 5.0;
  float temperature = (voltage - .5) * 100;
  lcd.print("La temp est de : ");
  lcd.setCursor(0, 1);

  Serial.print(temperature);
  lcd.print(temperature);
  lcd.print(" degres ");
  
  delay(1000);
  
}
