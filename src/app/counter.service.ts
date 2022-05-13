export class Counter {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log(this.activeToInactiveCounter);
  }

  incInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log(this.activeToInactiveCounter);
  }
}
