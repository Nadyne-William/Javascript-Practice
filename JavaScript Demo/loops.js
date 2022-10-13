// for
// while
// do while

// for(var counter = 1; counter <= 100; counter++){
//     console.log(counter+ " " +"Nadyne");
// }

// var counter = 0

// while(counter <= 30){
//     console.log("Nadyne", counter);
//     counter++
// }

// var counter = 1
// while(counter <= 30){
//     console.log(counter);
//     counter++

// }

// var counter = 30

// while(counter >= 30){
//     console.log("Nadyne", counter);
//     counter++
// }


// **Warning** Infinite loop

// var counter = 1
// do{
//     console.log("Nadyne ", counter);
//     counter++
// }while(counter >= 20)

// for(var mul = 5; mul <= 80; mul++){
//     if(mul % 5 == 0){
//         console.log(mul);
//     }
// }

// for(var mul = 50; mul >= 5; mul--){
//     if(mul % 5 == 0){
//         console.log(mul);
//     }
// }

// for (var mul = 100; mul >= 5; mul--) {
//   if (mul % 5 == 0) {
//     console.log(mul);
//   }
// }

// for (var i = 1; i <= 30; i++){
//     if(i % 3 == 0 && i % 5 != 0){
//         console.log("Fizz ", i);
//     }else if(i % 5 == 0 && i % 3 != 0){
//         console.log("Buzz ", i);
//     }else if(i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz ", i);
//     }
// }


// var multiples = []

// for(var i = 5; i <= 50; i++){
//     if(i % 5 == 0){
//         multiples.push(i)
//     }

// }

// console.log(multiples);



// var arr = ["obinna", "nadyne", "sophia", "faithful", "ebube"];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i].length % 2 == 0) {
//     console.log(arr[i] + " ==> " + arr[i].length);
//   }
// }

// var array = ["Kadi", "Nadyne", "Ebube", "Daniel"]

// for(var i = 0; i <= array.length; i++){

//     console.log(array[i]);
// }


// var arr = ["obinna", "nadyne", "sophia", "faithful", "ebube"];
// var evenNames = []

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i].length % 2 == 0) {

//     evenNames.push(arr[i])
//     // console.log(arr[i] + " ==> " + arr[i].length);
//   }
// }

// console.log(evenNames);





// var arr = ["Nadyne", "Obinna", "Ebube", "Sophia", "King"];

// for (var i = 0; i < arr.length; i++) {
// //   if (arr[i] == "Nadyne") 
// //   console.log(arr[i].length);
// console.log(arr[i]);
// }

// number 1 assignment

// var arr = [1, 2, 3]
// var  newArr = []

// for(var i = 0; i < arr.length; i++){
//     if(arr[i] == 2 || arr[i] == 3){

//         newArr.push(arr[i])

//     }
// }

// var arr = [1, 2, 3]

// var newArr = []

// for(var i = 0; i < arr.length; i++){
//     if(arr[i] == 3){
//         newArr.push(arr[i])
//     }
// }

// var arr = [1, 2, 3]

// var newArr = []

// for(var i = 0; i < arr.length; i++){

//     newArr.push(arr[i])
// } 

// console.log(newArr);

// number 2 assignment
// var newArrTwo = []
// var arr = [1, 2, 3]
//   for(var i = 2; i <= arr[i]; i--){
//       newArrTwo.push(arr[i])
//   }
//    console.log(newArrTwo);

// number 3 assignment
// var newArr = []
// var arr = [7, 5, 2]
// for(var i = 0; i < arr.length; i++){
//     newArr.push(arr[i] + 1)
//     // console.log(arr[i] + 1);
// }
// console.log(newArr);


// var arr = [1, 2, 3]
// var n = 1
// Output: [2, 3]

// var arr = [1, 2, 3]
// var n = 2
// Output: [3]

// var arr = [1, 2, 3]
// var n = 5
// Output: [ ]

// var arr = [1, 2, 3]
// var n = 0
// Output: [1, 2, 3]


// var arrOfElements = [4,8,6,9]
// var numOfdrop = 3

// var newArrOfDroppedElements = []

// for(var i = 0, sideTrack = 1; i < arrOfElements.length; i++, sideTrack++){
//     if(numOfdrop > arrOfElements.length){
//         console.log(newArrOfDroppedElements);
//         break
//     }else if (numOfdrop == 0){
//         console.log(arrOfElements);
//         break
//     }else{
//         if(sideTrack > numOfdrop){
//             newArrOfDroppedElements.push(arrOfElements[i])
//         }
//     }

// }

// console.log(newArrOfDroppedElements);
