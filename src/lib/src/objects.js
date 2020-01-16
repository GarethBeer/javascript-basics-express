const createPerson = (name, age) => {
  const person = {
    name: name,
    age: age
  };
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  }
  return false;
};

const getAges = people => {
  return people.map(names => names.age);
};

const findByName = (name, people) => {
  const individual = people.filter(names => names.name === name);
  return individual[0];
};

const findHondas = cars => {
  return cars.filter(names => names.manufacturer === "Honda");
};

const averageAge = people => {
  const ages = people.map(peep => peep.age);
  const avages = ages.reduce((a, b) => a + b);
  return avages / people.length;
};

const createTalkingPerson = (name, age) => {
  (this.name = name),
    (this.age = age),
    (this.introduce = function(n) {
      return "Hi " + n + ", my name is " + name + " and I am " + age + "!";
    });
  return this;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
