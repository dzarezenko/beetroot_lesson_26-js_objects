let person = {
  first_name: "Dmytro",
  last_name: "Zarezenko",
  email: "dmytro.zarezenko@gmail.com",
}

console.log(person);
console.log(person["first_name"]);
console.log(`${person.first_name} ${person.last_name}`);

for (let key in person) {
  console.log(key);
  //console.log(typeof key);

  console.log(person[key]);
}

//let nextPerson = {};
/*for (let key in person) {
  nextPerson[key] = person[key];
}*/
let nextPerson = Object.assign({a: "Test"}, person);
console.log(nextPerson);

delete person.email;
console.log("Person", person);
console.log("Next Person", nextPerson);
