int switchState;

void setup() {
  pinMode(13, OUTPUT);
  pinMode(2, INPUT);
  

}

void loop() {
  switchState = digitalRead(2);
  if(switchState == LOW) {
    digitalWrite(13, HIGH);
  }
  else {
    digitalWrite(13, LOW);
  }

}
