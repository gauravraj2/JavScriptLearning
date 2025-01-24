console.log("Frustrated Launda Variables");

const accountId = 1234
//accountId = 345  
/* We cant re-assign values to same name 
    of variables while using const 
*/
console.log(accountId);

let accountEmail = "Frustrated@gmail.com"
var accountPassword = "32232"
accountCity = "Delhi"

//console.table([accountEmail, accountPassword, accountCity])
// Now we will try to re-assign all these values

accountEmail = "Launda@gmail.com"
accountPassword = "1234"
accountCity = "Bangalore"

console.table([accountEmail, accountPassword, accountCity])
/*
Prefer not to use var, because it gives issue in block 
scope and functional scope (Values can be changed)
*/

let accountState;
console.log("accountState = ", accountState); 
//accountState will give undefined because values are not assigned


//console.log(accountName);
//It will throw ReferenceError because accountName is not declared

