// // 1.    Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legkisebb elemét!

const intArr = [3254, 546, 23426, 3476, 234, 256365, 23, 4];

function getMinElementFromAnArray(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min);
}

getMinElementFromAnArray(intArr);
getMinElementFromAnArray([345, 546, 234, 47]);





// // 2.   Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legnagyobb elemét!

const intArrMax = [3254, 546, 23426, 3476, 234, 256365, 23, 4];

function getMaxElementFromAnArray(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}

getMaxElementFromAnArray(intArrMax);
getMaxElementFromAnArray([345, 546, 234, 47]);



// // 3.     Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb átlagát! 











// //4.      Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb összegét!
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < numArr.length; i +=1) {
    sum += numArr[i];
}
console.log("Sum:", sum);

// // 5.    Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb páros elemeinek a számát!

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  let pieces = 0;
//  for (let i = 0; i < num.length; i +=1) {
 
//  if (num[i] % 2 === 0) {
//      pieces ++;
//  }
//  }
//  console.log( "Even Numbers:", pieces);




// // 6.   Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb második legkisebb elemét! 
//nincs kesz !!!!

const intArr = [3254, 546, 23426, 3476, 234, 256365, 23, 4];

function getMinElementFromAnArray(arr) {
    let min = arr[0];
    let min2 =arr[1];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min2);
}

getMinElementFromAnArray(intArr);
getMinElementFromAnArray([345, 546, 234, 47]);


// // 7.   Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb harmadik legnagyobb elemét!

// // 8.    Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb 
// //(feltételezzük, hogy beágyazott tömböt, objektumot, egyéb iterálható elemet nem tartalmaz) 
// //tartalmazza-e a 23-as számot! Használj lineáris keresést!

// function linearSearch(arr, search) {
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[i] === search) {
//             return 'igen';
//         }
//     }
//     return 'nem';
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(linearSearch(numbers, 23));

// // 9.   Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, csak egész számokat tartalmazó tömb 
// //tartalmazza-e a 23-as számot! Használj logaritmikus keresést! Nézz utána mi az, milyen feltételei vannak, 
// //és hogyan valósítható meg!

// // 10.  Írd ki, hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb 
// //(feltételezzük, hogy beágyazott tömböt, objektumot nem tartalmaz) hányszor tartalmazza a 23-as számot!

// // 11.   Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) 
// //segítségével egy tetszőleges elemszámú, csak lebegőpontos számokat tartalmazó tömb elemeit 
// //növekvő sorrendbe! Írasd ki a rendezett tömböt!

// function bubbleSort(arr) {
//     let swapped;
//     do {
//         swapped = false;
//         for (let i = 0; i < arr.length - 1; i += 1) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 swapped = true;
//             }
//         }
//     } while (swapped)
//     return arr;
// }

// const arr = [0.435, 1.567, 0.8, 3.33, 6.346];

// console.log(bubbleSort(arr));



// // 12.   Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) 
// //segítségével egy tetszőleges elemszámú, beágyazott tömb, és objektum kivételével bármilyen 
// //típusú elemeket tartalmazó tömb elemeit csökkenő sorrendbe! A nem szám típusú elemeket rakd 
// //a tömb végére az eredeti sorrendbe. Írasd ki a rendezett tömböt!

// function bubbleSort(sortArr) {
//     let swapped;
//     do {
//         swapped = false;
//         for (let i = 0; i < sortArr.length - 1; i += 1) {
//             if (sortArr[i] < sortArr[i + 1]) {
//                 let temp = sortArr[i];
//                 sortArr[i] = sortArr[i + 1];
//                 sortArr[i + 1] = temp;
//                 swapped = true;
//             }
//         }
//     } while (swapped)
//     return sortArr;
// }

// const sortArr = [435, 567, 8, 33, 346, 67, 678, 235, 225];

// console.log(bubbleSort(sortArr));

// // 13.     Adott egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb. 
// //A tömb elemeit rendezzük növekvő sorrendbe. Ezután a felhasználótól kérjünk be egy számot 
// //(addig kérjünk be értéket, míg valóban egy véges egész számot ad meg). 
// //A számot szúrjuk be a tömbbe úgy, hogy a tömb továbbra is rendezett maradjon, 
// //tehát a megfelelő indexű helyre kerüljön be a plusz elem.
// // Írasd ki a rendezett tömböt!

// function bubbleSortAsc(arr) {
//     let swapped;
//     do {
//         swapped = false;
//         for (let i = 0; i < arr.lenght - 1; i += 1) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 swapped = true;
                
//             }
//         }
//     }while (swapped)
//     return arr;
// }

// const arr = [125, 442, 453, 24, 585, 667, 71, 85, 9, 210];

// // 14.   Adott egy tömb, mely azonos darabú egész számot, és szöveget tartalmaz véletlenszerű sorrendben.
// //Rendezzük úgy a tömböt, hogy minden szám után egy string következzen! Írasd ki a rendezett tömböt!

const sample = [232, 234546, 'hello', 67, 'szia', 98, 'csá', 'cső'];

function customSort(arr) {
  const numbers = [];
  const strings = [];
  const sortedArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'number') {
      numbers.push(arr[i]);
    } else {
      strings.push(arr[i]);
    }
  }
  for (let i = 0; i < numbers.length; i += 1) {
    sortedArray.push(numbers[i]);
    sortedArray.push(strings[i]);
  }
  return sortedArray;
}

const result = customSort(sample);
console.log(result);

// V2
function getPrimitiveElementsByType(arr, type) {
    const typedArray = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (typeof arr[i] === type) {
        typedArray.push(arr[i]);
      }
    }
    return typedArray;
  }
  
  function mixArrays(arr1, arr2) {
    const mixedArray = [];
    for (let i = 0; i < arr1.length; i += 1) {
      mixedArray.push(arr1[i], arr2[i]);
    }
    return mixedArray;
  }
  
  const numbers = getPrimitiveElementsByType(sample, 'number');
  const strings = getPrimitiveElementsByType(sample, 'string');
  console.log(mixArrays(numbers, strings));


// 15.   Adott egy tetszőleges pozitív egész számokat tartalmazó tömb. Válogassuk szét külön egy even
// (páros), és odd (páratlan) nevezetű tömbbe a páros, és páratlan számokat! Írjuk ki a 2 tömböt!

// 16.   Adott két azonos elemszámú, csak egész számokat tartalmazó tömb. Külön tömbökbe készítsük el
 //a két tömb: metszetét, unióját, különbségét, és descartes szorzatát. Írassuk ki az új tömböket!

 // 17. legnagyobb elem:

 let numArrBiggest = [1, 2, 3, 4, 5, 6, 7, 8, 999, 10];
let biggest = numArrBiggest[0];

for (let i = 0; i < numArrBiggest.length; i +=1) {
    if(numArrBiggest[i] > biggest) {
        biggest = numArrBiggest[i];
    }
}
console.log("Sum:", biggest);