#include <MultiStepper.h>
#include <AccelStepper.h>

const int x_step_pin = 2;
const int x_dir_pin  = 3;
const int y_step_pin = 5;
const int y_dir_pin  = 4;
AccelStepper x_stepper(AccelStepper::DRIVER, x_step_pin, x_dir_pin);
AccelStepper y_stepper(AccelStepper::DRIVER, y_step_pin, y_dir_pin);

String* split(String str) {
  String* splitedArray = new String[3];
  int i = 0;
  while(true) {
    int index = str.indexOf(' ');
    if (index == -1) {
      splitedArray[i] = str;
      break;
    }
    splitedArray[i++] = str.substring(0, index);
    str = str.substring(index+1, str.length());
  }

  return splitedArray;
}

void setup() {
  Serial.begin(9600);
  x_stepper.setAcceleration(1000);
  x_stepper.setCurrentPosition(0);
  y_stepper.setAcceleration(1000);
  y_stepper.setCurrentPosition(0);
}

void loop() {}

void serialEvent() {
  String input = Serial.readStringUntil('\r');
  String* splitArray = split(input);

  String command = splitArray[0];
  if (!command.compareTo("MV")) {
    Serial.print("ACK\r");
    int xPos = splitArray[1].toInt() * 250;
    int yPos = splitArray[2].toInt() * 250;
    x_stepper.moveTo(xPos);
    y_stepper.moveTo(yPos);
    x_stepper.runToPosition();
    y_stepper.runToPosition();
    x_stepper.stop();
    y_stepper.stop();
    Serial.print("Done\r");
  } else if (!command.compareTo("POS")) {
    Serial.print("POS ");
    Serial.print(x_stepper.currentPosition() / 250);
    Serial.print(" ");
    Serial.print(y_stepper.currentPosition() / 250);
    Serial.print('\r');
  }
}
