import House from "../models/house.js";

//PRIVATE

let _state = {
  houses: [
    new House({ price: 150000, title: 'Rustic Farm House', img: 'https://t-ec.bstatic.com/images/hotel/max1024x768/913/91371647.jpg', description: 'A great place to raise a family... of pigs.' }),
    new House({ price: 375000, title: 'Modest Home in the city', img: 'https://static1.squarespace.com/static/5b6b7948f93fd47fa56f9687/t/5b75b970cd836618a47ca99d/1534441858577/_HP18480-Edit.jpg', description: 'Spend your whole life avoiding ever meeting the neighbors in person.' }),
    new House({ price: 890000, title: 'Modernism at its finest', img: 'https://cdn.trendir.com/wp-content/uploads/old/house-design/2015/02/13/modern-day-bauhaus-home-contemporary-masterpiece-1.jpg', description: 'Gated home, no need to worry about girl scouts coming to your door' })
  ]
}





let _subscribers = {
  houses: []
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
  deleteHouse(id) {
    for (let i = 0; i < _state.houses.length; i++) {
      let house = _state.houses[i];
      if (house.id == id) {
        _state.houses.splice(i, 1)
        break;
      }
    }
    setState('houses', _state.houses)
  }
}