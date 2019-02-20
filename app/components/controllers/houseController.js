//PRIVATE
import HouseService from "../services/houseService.js";

let _hs = new HouseService()

function draw() {
  let houses = _hs.Houses
  let template = ''
  houses.forEach(h => {
    template += h.getTemplate()
  })
  document.getElementById('available-content').innerHTML = template
  document.getElementById('form-content').innerHTML = `
    <form onsubmit="app.controllers.houseController.addHouse(event)">
        <input type="number" name="bedrooms" placeholder="Bedrooms" required>
        <input type="number" name="bathrooms" placeholder="Bathrooms" required>
        <input type="number" name="levels" placeholder="Levels" required>
        <input type="number" name="year" placeholder="Year" required>
        <input type="text" name="description" placeholder="Description">
        <input type="number" name="price" placeholder="Price" required>
        <input type="url" name="imgUrl" placeholder="Image" required>
        <button type="submit">Submit</button>
    </form>`
}

//PUBLIC
export default class HouseController {
  constructor() {
    _hs.addSubscriber('houses', draw)
  }

  //IN ANY FORM SUBMISSION DO NOT FORGET TO PREVENT THE DEFAULT ACTION
  addHouse(event) {
    event.preventDefault();
    let form = event.target
    let newHouse = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      levels: form.levels.value,
      year: form.year.value,
      description: form.description.value,
      price: form.price.value,
      imgUrl: form.imgUrl.value
    }
    _hs.addHouse(newHouse)
    //Clears the form
    form.reset()
  }

  deleteHouse(id) {
    _hs.deleteHouse(id)
  }

  bid(id) {
    _hs.bid(id)
  }

  getHouses() {
    _hs.getApiHouses()
  }

}