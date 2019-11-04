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
