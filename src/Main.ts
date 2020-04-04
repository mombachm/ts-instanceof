import { CarImpl } from "./Car";

class Main {
  execute() {
    const car = new CarImpl();
    if (car instanceof CarImpl) {
      debugger;
    } else {
      debugger; 
    }
  }
}
export default new Main().execute();
