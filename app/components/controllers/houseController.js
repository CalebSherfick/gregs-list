//private
import HouseService from "../services/houseService.js";

let _hs = new HouseService()

function draw() {
  let template = ''
  _hs.Houses.forEach(h => {
    template += h.getTemplate()
  })
  document.getElementById('available-content').innerHTML = template
  document.getElementById('form-content').innerHTML = `
    <form onsubmit="app.controllers.carController.addCar(event)">
        <input type="number" name="beds" placeholder="Beds" required>
        <input type="number" name="bath" placeholder="Bath" required>
        <input type="number" name="levels" placeholder="Levels" required>
        <input type="number" name="year" placeholder="Year" required>
        <input type="text" name="description" placeholder="Description">
        <input type="number" name="price" placeholder="Price" required>
        <input type="url" name="imgUrl" placeholder="Image" required>
        <button type="submit">Submit</button>
    </form>
    `

}

//public
export default class HouseController {
  constructor() {
    _hs.addSubscriber('houses', draw)
  }

  getHouses() {
    _hs.getApiHouses()
  }
}