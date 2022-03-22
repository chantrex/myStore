const username: string  = 'Christopher';
const sum = (a: number, b: number) => {
  return a + b;
}
sum (1,4);

class Person {

  constructor(public age: number, public lastname: string){ }
}

const persona = new Person (15,'Chantres');
persona.age
