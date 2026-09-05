## **Augabe 1**

Ein Aufzug soll sich nur dann nach oben bewegen, wenn der Knopf gedrückt *und* die Tür zu ist. 

Beschreibe in eigenen Worten, wie die Aufzugssteuerung technisch umgesetzt werden soll.

![fahrstuhl](https://inf-schule.de/content/12_rechner/2_digitaltechnik/1_gatter/1_ein_und_fahrstuhl/fahrstuhl.png)

**Lösung**

| Türkontakt | Knof | Aufzug bewegung |
| ----------- | ---- | --------------- |
| 0           | 0    | 0               |
| 0           | 1    | 0               |
| 1           | 1    | 1               |
| 1           | 0    | 0               |




## **Augabe 2**

a) Interpretiere die folgenden Systemzustände:

	t=1, k=0

	t=0, k=1

**Lösung**




b) Ergänze in der Schattabelle das gewünchte Ausgabe-Verhalten für den Fahrstuhlt.

**Lösung**

| t | k | M |
| - | - | - |
| 0 | 0 |   |
| 0 | 1 |   |
| 1 | 0 |   |
| 1 | 1 |   |




c) Gib mit Hilfe der Schaltvabriablen einen Schaltterm an, der die Aufzugssteuerung beschreibt.

Ein Beispiel-Schaltterm wäre z.B. R = h ∧ k: Ein Rasenmäher (R) läuft nur, wenn ein Hebel (h) gezogen und ein Knopf (k) gedrückt ist. Schaltterme werden (später) ausführlich eingeführt.
