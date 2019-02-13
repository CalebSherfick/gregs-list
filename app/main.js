import HouseController from "./components/houseController.js";




class App {
  constructor() {
    this.controllers = {
      houseController: new HouseController()
    }
  }
}




window.app = new App()