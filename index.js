function forEach(array, func) {
  func(array);
}

function map(array, func) {
  let newArray = [];
  for (const i of array){
    newArray.push(func(i));
  }
  return newArray;
}

function filter(array, func) {
  let newArray = [];
  for (const i of array){
    if (func(i)){
      newArray.push(i);
    }
  }
  return newArray;
}

function every(array, func) {
  for (const i of array) {
    if(!func(i)) {
      return false;
    } 
  }
  return true;
}

function some(array, func) {
  for (const i of array){
    if (func(i)) {
      return true;
    }
  }
  return false;
}

function majority(array, func) {
  let truthy = 0;
  let falsy = 0;

  for (const i of array){
    func(i) ? truthy++ : falsy++;
  }

  return truthy > falsy ? true : false;
}



function once(func) {
  
}

function groupBy() {

}

function arrayToObject() {

}

module.exports = { 
  forEach, 
  map, 
  filter, 
  every, 
  some, 
  majority,
  once,
  groupBy,
  arrayToObject,
};
