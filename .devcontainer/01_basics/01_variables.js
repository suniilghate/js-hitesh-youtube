const accountId = 123556;
let accountEmail = "sunil.ghate@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

/*
Prefer not to use var use let instead of var
because of the issue in block scope and functional scope
*/

//accountId = 344; //constant not allowed to change the value
accountEmail = "tejasvi.ghate@gmail.com";
accountPassword = "222211";
accountCity = "Bengaluru";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);