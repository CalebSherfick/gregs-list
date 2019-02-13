import HouseService from "./houseService.js";

//PRIVATE
let _hs = new HouseService()


function draw() {
  let houses = _hs.Houses
  let template = ''
  houses.forEach(house => {
    template += house.getTemplate()
  });
  document.getElementById('available-houses').innerHTML = template
}

function logHouses() {
  console.log("houses UPDATED!!!")
}

//PUBLIC
export default class HouseController {
  constructor() {
    _hs.addSubscriber('houses', draw)
    _hs.addSubscriber('houses', logHouses)
    draw()
  }



  addHouse(event) {
    event.preventDefault();
    let form = event.target
    let newHouse = {
      title: form.title.value,
      price: form.price.value,
      description: form.description.value,
      img: form.img.value
    }

    _hs.addHouse(newHouse)

    form.reset()

  }
  deleteHouse(id) {
    _hs.deleteHouse(id)
  }
}