// PropertyName: value

// var person = {
//     firstName : "Nadyne",
//     lastName : 'Williams',
//     age: 20,
//     isGraduated: false,
// }

var person = {
  firstName: "Nadyne",
  lastName: "Williams",
  age: 20,
  isGraduated: false,
  likes: {
    eatables: [
      "indomie",
      "spahgetti",
      "rice and stew",
      "jollof rice",
      "bole",
      "cake but not birthday cake",
    ],
    clothes: [
      "boyfriend jeans",
      "baggy trouser",
      "big t-shirts",
      "shorts",
      "dresses",
    ],
    footwears: ["sneakers", "heels", "sandals", "cover shoes"],
    wateryindomie: false,
  },
  moviesWatched: ["twilight", "let it shine", "high school musical"],
  dislikes: {
    people: {
      peoplesCharacter: {
        speech: {
          tellsLies: true,
          isInsultive: true,
          isTalkertive: true,
        },
        appearance: ["dirty", "indecent", "sloppy"],
      },
    },
  },
};

// To access object values ==> ObjName.propertyName
// console.log(person.likes.eatables[person.likes.eatables.length - 1]);
console.log(person.moviesWatched[person.moviesWatched.length - 2]);
