import CarController from "./components/controllers/carController.js";
import HouseController from "./components/controllers/houseController.js";
import JobController from "./components/controllers/jobController.js";


class App {
  constructor() {
    this.controllers = {
      carController: new CarController(),
      houseController: new HouseController(),
      jobController: new JobController()
    }
  }
}



// @ts-ignore
window.app = new App()