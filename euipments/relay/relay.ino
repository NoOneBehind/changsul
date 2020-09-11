String* split(String str) {
  String* splitArray = new String[16];
  int i = 0;
  while(true) {
    int index = str.indexOf(' ');
    if (index == -1) {
      splitArray[i] = str;
      break;
    }
    splitArray[i++] = str.substring(0, index);
    str = str.substring(index+1, str.length());
  }

  splitArray[i + 1] = "\0";
  return splitArray;
}

void setup() {
  Serial.begin(9600);
  for (int i = 2; i < 16; ++i) {
    if (i == 14) {
      pinMode(A0, OUTPUT);
      digitalWrite(A0, HIGH);
    } else if (i == 15) {
      pinMode(A1, OUTPUT);
      digitalWrite(A1, HIGH);
    } else {
      pinMode(i, OUTPUT);
      digitalWrite(i, HIGH);
    }
  }
}

void loop() {}

void serialEvent() {
  String input = Serial.readStringUntil('\r');
  String* splitArray = split(input);
  if (!splitArray[0].compareTo("RY")) {
    int* ch = new int[13];
    int nullIdx = 0;
    for (int i = 1; i < 14; ++i) {
      if (splitArray[i] == "\0") {
        nullIdx = i - 1;
        break;
      }
      int inputCh = splitArray[i].toInt();
      ch[i - 1] = inputCh;
    }
    int on = ch[nullIdx - 1];
    ch[nullIdx - 1] = -1;

    for (int i = 0;  i < 13; ++i) {
      if (ch[i] == -1) {
        break;
      }
      if (ch[i] == 13) {
        digitalWrite(A0, !on);
      } else if (ch[i] == 14) {
        digitalWrite(A1, !on);
      } else {
        digitalWrite(ch[i] + 1, !on);
      }
//      delay(10);
    }
    Serial.write("Done\r");
  }
}

