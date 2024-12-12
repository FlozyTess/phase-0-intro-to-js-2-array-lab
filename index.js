 //define the initial cats array
 let cats = ["Milo","Otis", "Garfield"];
//destructive functions
function destructivelyAppendCat(name) {
    cats.push(name);
  }
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  // Non-destructive functions
function appendCat(name) {
    return [...cats, name]; // Create a new array with the new cat appended
  }
  function prependCat(name) {
    return [name, ...cats]; // Create a new array with the new cat prepended
  }
  function removeLastCat() {
    return cats.slice(0, -1); // Create a new array without the last cat
  }
  
  function removeFirstCat() {
    return cats.slice(1); // Create a new array without the first cat
  }    
