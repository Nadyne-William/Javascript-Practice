// function doSomething(a, b, c = 70) {
//   var sum = a + b + c;
//   if(a == 0 && b == 0 && c == 0){
//       return false
//   }
//   console.log("Nothing executed");
//   return sum
// }

// var test
// function doSomething(a, b, c) {
//   var sum = a + b + c;

//   return sum
// }

// test = doSomething(1, 3, 6);
// console.log(test);

// var sumOut = doSomething(0,0,0);

// console.log(sumOut);

// function dropElements(arrOfElements, numOfdrop) {
//   var newArrOfDroppedElements = [];

//   for (var i = 0, sideTrack = 1; i < arrOfElements.length; i++, sideTrack++) {
//     if (numOfdrop > arrOfElements.length) {
//       return newArrOfDroppedElements;
//     }
//     if (numOfdrop == 0) {
//       return arrOfElements;
//     }
//     if (sideTrack > numOfdrop) {
//       newArrOfDroppedElements.push(arrOfElements[i]);
//     }
//   }

//   return newArrOfDroppedElements
// }

// const dropElements = (arrOfElements, numOfdrop) => {
//   var newArrOfDroppedElements = [];

//   for (var i = 0, sideTrack = 1; i < arrOfElements.length; i++, sideTrack++) {
//     if (numOfdrop > arrOfElements.length) {
//       return newArrOfDroppedElements;
//     }
//     if (numOfdrop == 0) {
//       return arrOfElements;
//     }
//     if (sideTrack > numOfdrop) {
//       newArrOfDroppedElements.push(arrOfElements[i]);
//     }
//   }

//   return newArrOfDroppedElements;
// };

// var variable = dropElements([4, 8, 6, 9], 2);

// console.log(variable);

// for(var i = 1; i <= 30; i++){
//   console.log(i);
// }



// const arrFunc = () => {
//   console.log("Hello");
// };

// arrFunc();