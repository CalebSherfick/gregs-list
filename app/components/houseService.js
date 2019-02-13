import House from "../models/house.js";

//PRIVATE

let _state = {
  houses: [
    new House({ price: 150000, title: 'Rustic Farm House', img: '', description: 'A great place to raise a family... of pigs.' }),
    new House({ price: 375000, title: 'Modest Home in the city', img: '', description: 'Spend your whole life avoiding ever meeting the neighbors in person.' }),
    new House({ price: 890000, title: 'Modernism at its finest', img: '', description: 'Gated home, no need to worry about girl scouts coming to your door' })
  ]
}





let _subscribers = {
  cars: []
}


function setState(dataName, value) {
  _state[dataName] = value
  _subscribers[dataName].forEach(fn => fn());
}


//PUBLIC
export default class HouseService {

  addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }
  get Houses() {
    return _state.houses
  }
  addHouse(rawHouse) {
    let newHouse = new House(rawHouse)
    _state.houses.push(newHouse)
    setState('houses', _state.houses)
  }
  deleteHouse(houseId) {
    for (let i = 0; i < _state.cars.length; i++) {
      let house = _state.houses[i];
      if (house.houseId == houseId) {
        _state.houses.splice(i, 1)
        break;
      }
    }
    setState('houses', _state.houses)
  }
}