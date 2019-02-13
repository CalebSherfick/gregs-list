import HouseController from "./components/houseController.js";




class App {
  constructor() {
    this.controllers = {
      houseController: new HouseController()
    }
  }
}




// @ts-ignore
window.app = new App()