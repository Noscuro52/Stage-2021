const byte PIN_BUZZING_BUTTON = 8;

/** Fonction setup() */
void setup() {
  // Rien à faire ici
}

/** Fonction permettant de faire biper le buzzer tant que le bouton apppuyé */
void beepMelody(unsigned int frequency, unsigned long duration, unsigned long delay_duration) {
  
  // Met le broche en entrée (sans pullup)
  pinMode(8, INPUT);
  
}

/** Fonction loop() */
void loop() {
  beepMelody(2637, 200, 400);
  beepMelody(1975, 200, 200);
  beepMelody(2093, 200, 200);
  beepMelody(2349, 200, 400);
  beepMelody(2093, 200, 200);
  beepMelody(1975, 200, 200);
  beepMelody(1760, 200, 400);
  beepMelody(1760, 200, 200);
  beepMelody(2093, 200, 200);
  beepMelody(2637, 200, 400);
  beepMelody(2349, 200, 200);
  beepMelody(2093, 200, 200);
  beepMelody(1975, 200, 400);
  beepMelody(1975, 200, 200);
  beepMelody(2093, 200, 200);
  beepMelody(2349, 200, 400);
  beepMelody(2637, 200, 400);
  beepMelody(2093, 200, 400);
  beepMelody(1760, 200, 400);
  beepMelody(1760, 200, 800);
  beepMelody(1760, 200, 400);
  beepMelody(2349, 200, 200);
  beepMelody(2794, 200, 200);
  beepMelody(3520, 200, 400);
  beepMelody(3136, 200, 200);
  beepMelody(2794, 200, 200);
  beepMelody(2637, 200, 600);
  beepMelody(2093, 200, 200);
  beepMelody(2637, 200, 400);
  beepMelody(2349, 200, 200);
  beepMelody(2093, 200, 200);
  beepMelody(1975, 200, 400);
  beepMelody(1975, 200, 200);
  beepMelody(2093, 200, 200);
  beepMelody(2349, 200, 400);
  beepMelody(2637, 200, 400);
  beepMelody(2093, 200, 400);
  beepMelody(1760, 200, 400);
  beepMelody(1760, 200, 800);
}
