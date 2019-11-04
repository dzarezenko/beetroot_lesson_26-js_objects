let person = {
  first_name: "Dmytro",
  last_name: "Zarezenko",
  email: "dmytro.zarezenko@gmail.com",
  education: {
    graduated_year: 2009,
    institution: "VNTU"
  },

  name: function() {
    return `${this.first_name} ${this.last_name}`;
  },

  setName: function(name) {
    this.first_name = name;
  }

}

console.log(person);
person.setName("Alexandra");
console.log(person);

console.log(person["first_name"]);
console.log(`${person.first_name} ${person.last_name}`);
console.log("Full Name", person.name());

console.log(person.education.graduated_year);

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
