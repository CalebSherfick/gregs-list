import CarController from "./components/controllers/carController.js";
import HouseController from "./components/controllers/houseController.js";





class App {
  constructor() {
    this.controllers = {
      carController: new CarController(),
      houseController: new HouseController()
    }
  }
}



// @ts-ignore
window.app = new App()