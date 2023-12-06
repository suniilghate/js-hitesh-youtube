let score = true;

// console.log(score); 
// console.log(typeof score);
// console.log(typeof(score));
let newScore = Number(score);
//console.log(typeof(newScore));
//console.log(newScore);
let isLoggedIn = "sunil";

let convertBoolean = Boolean(isLoggedIn);
console.log(convertBoolean);

//"33" => 33 get converted to sting 33 to number 33
//"33abc" => NaN alphanumberic vlaue converted to NaN but gives type as number do not relie on typeof verify the value also
//true=>1 bolean converts to 1 or 0 repectively
//1 => true and 0 => false
//"" => false
//"sunil" => true

let someNumber = 33;
let someString = String(someNumber);
console.log(someString);
