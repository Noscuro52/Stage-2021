/**
 * Code d'exemple d'utilisation d'un bouton et d'un buzzer sur une même broche.
 * N.B. Ce code nécessite un montage spécial pour fonctionner.
 */

/** La broche pour le bouton et le buzzer */
const byte PIN_BUZZING_BUTTON = 2;

/** Fonction setup() */
void setup() {
  
  // Met la LED broche 13 en sortie pour visualiser l'état du bouton
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LOW);
}

/** Fonction loop() */
void loop() {

  // Fait biper le buzzer
  beep(500);

  // Lit l'état du bouton et assigne cet état à la LED broche 13
  digitalWrite(LED_BUILTIN, readButtonState());
  delay(500);
}

/** Fonction permettant de lire l'état du bouton */
byte readButtonState() {
  
  // Met le broche en entrée (sans pullup)
  pinMode(PIN_BUZZING_BUTTON, INPUT);
  
  // Lit l'état du bouton
  return digitalRead(PIN_BUZZING_BUTTON);
}

/** Fonction permettant de faire biper le buzzer */
void beep(unsigned long duration) {
  
  // Génére un bip sur la broche du buzzer
  // N.B. La broche est automatiquement configurée en sortie.
  tone(PIN_BUZZING_BUTTON, 440, duration);
  
  // Attend la fin du bip
  delay(duration);
}
