//PRIVATE
import House from "../../models/house.js";

// @ts-ignore
let _api = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api'
})

let _state = {
  houses: []
}

let _subscribers = {
  houses: []
}

function setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn());
}


//public
export default class HouseService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Houses() {
    return _state.houses.map(h => new House(h))
  }

  //Initialize or Get all Current Cars
  getApiHouses() {
    _api.get('houses')
      .then(res => {
        let data = res.data.data.map(h => new House(h))
        setState('houses', data)
      })
  }

  addHouse(rawHouse) {
    let newHouse = new House(rawHouse)
    _api.post('houses', newHouse)
      .then(res => {
        this.getApiHouses()
      })
  }

  deleteHouse(id) {
    _api.delete('houses/' + id)
      .then(res => {
        this.getApiHouses()
      })
  }

  bid(houseToFindId) {
    let house = _state.houses.find(h => h._id == houseToFindId)
    house.price = parseInt(house.price)
    house.price++
    _api.put('houses/' + house._id, house)
      .then(res => {
        this.getApiHouses()
      })
  }
}