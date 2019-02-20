import House from "../../models/house.js";

//private

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

function setState(prop, value) {
  _state[prop] = value
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


  getApiHouses() {
    _api.get('houses')
      .then(res => {
        let data = res.data.data.map(h => new House(h))
        setState('houses', data)
      })
  }
}