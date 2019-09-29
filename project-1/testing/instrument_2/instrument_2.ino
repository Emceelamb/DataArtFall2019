const int transistorPin = 13;   // connected to the base of the transistor
 
 void setup() {
   // set  the transistor pin as output:
   pinMode(transistorPin, OUTPUT);
 }

// 2n3904
// emitter = ground
// base = data
// collector = load/ power 
 
 void loop() {
   digitalWrite(transistorPin, HIGH);
   delay(30);
   digitalWrite(transistorPin, LOW);
   delay(1000);
 }
