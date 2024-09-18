console.log("ATM Machine");
import promptSync from "prompt-sync";
let prompt = promptSync();
// When the system starts the user is prompted with a user id and user pin. After entering the details successfully, the ATM functionalities are unlocked. All the user data is generated randomly.

let id = prompt("Enter Your Id ");
let userId = "duaa";
while (userId !== id) {
  id = prompt("Please Enter Your Right Id ");
}

let pin = prompt("Enter Your Pin ");
let userPin = "123";
while (userPin !== pin) {
  pin = prompt("Please Enter Your Right Pin ");
}

console.log("What you want to do ?");
console.log("1) Add payment to account");
console.log("2) Take payment from account");
let opt = prompt("Select Any One Option ");

while (opt != "2" && opt != "1") {
  console.log(`❌ Wrong option choosed`);
  opt = prompt("Please enter right option ");
}
if (opt == "1") {
  let add = prompt("Enter amount in rupees you want to add in your account ");
  console.log(`✔ Congrats you have added ${add} rupees in your account`);
} else if (opt == "2") {
  let take = prompt("Enter amount in rupees you want from your account ");
  console.log(`✔ Congrats you have took ${take} rupees from your account`);
}

console.log("What you want to do ?");
console.log("1) Add payment to account");
console.log("2) Take payment from account");
console.log("3) Close the system");
let again = prompt("Select Any One Option ");

while (opt != "1" && opt != "2" && opt != "3") {
  console.log(`❌ Wrong option choosed`);
  opt = prompt("Please enter right option ");
}
if (again == "1") {
  let add = prompt("Enter amount in rupees you want to add in your account ");
  console.log(`✔ Congrats you have added ${add} rupees in your account`);
} else if (again == "2") {
  let take = prompt("Enter amount in rupees you want from your account ");
  console.log(`✔ Congrats you have took ${take} rupees from your account`);
} else if (again == "3") {
  console.log("Thank you for choosing us! Have a good day 👋");
}
