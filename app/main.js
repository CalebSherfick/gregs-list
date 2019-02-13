import HouseController from "./components/houseController.js";
import CarController from "./components/carController.js";




class App {
  constructor() {
    this.controllers = {
      houseController: new HouseController(),
      carController: new CarController
    }
  }
}







// @ts-ignore
window.app = new App()