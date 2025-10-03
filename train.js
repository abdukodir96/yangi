// TASK E
function reverseString(a) {
  return a.split("").reverse().join("");
}

console.log(reverseString("hello")); 
console.log(reverseString("ridokudba")); 


// Task D:
// function checkContent(a, b) {
//   return a
//   .split('')
//   .sort()
//   .join('') === b.split('')
//   .sort()
//   .join('');
// }

// console.log(checkContent("mitgroup", "gmtiprou"));
// console.log(checkContent("hello", "olleh"));      
// console.log(checkContent("abc", "abd")); 
// console.log(checkContent("abdukodir", "ridokudba"));        




// TASK C:
// function checkContent(a, b) {
//   return a.toLowerCase().split("").sort().join("") === 
//          b.toLowerCase().split("").sort().join("");
// }

// console.log(checkContent("alex", "elax")); 
// console.log(checkContent("mit", "imt"));
// console.log(checkContent("group", "rtsgd"));


// Task - B
// DEFINE
/*
function qoldiqliBolish(a, b, callback) {
  if (b === 0) {
    callback("Mahraj nolga teng emas!", null);
  } else {
    const c = a % b;
    callback(null, c);
  }
}

// CALL
qoldiqliBolish(7, 5, (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    console.log("data:", data);
    console.log("MANTIQLAR...");
  }
});
*/



// Task - A:

// function countLetter(letter, word) {
//   if (typeof letter !== "string" || typeof word !== "string") {
//     return "Both parameters must be strings";
//   }
//   if (letter.length !== 1) {
//     return "The first parameter must be a single letter";
//   }

//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }


// console.log(countLetter("e", "korea"));
// console.log(countLetter("j", "jeonju"));
// console.log(countLetter("a", "asaka"));
// console.log(countLetter("e", "steve")); 
// console.log(countLetter("s", "MIT"));
// console.log(countLetter("d", "abdukodir"));







// console.log("Jack Ma maslaxatlari");
// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "to'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
//     "o'zingizga ishlashingizni boshlang", // 30-40
//     "siz kuchli bo'lgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yo'q endi", // 60
// ];

// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function () {
//             callback(null, list[5]);
//         }, 5000);
//     }
// }

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {  
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log("javob:", data);
//     }
// });
// console.log("passed here 1");

// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });
//     }
// }

// console.log("passed here 0");
// maslahatBering(20)
// .then((data) => {
//     console.log("javob:", data);
// })
// .catch((err) => {
//     console.log("ERROR:", err);
// });
// console.log("passed here 1");

//ASYNC/AWAIT
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();