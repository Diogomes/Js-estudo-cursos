interface IPerson {
  id: number;
  name: string;
  age: number;
  sayMyName(): string;
}

class Person implements IPerson {
  readonly id: number;
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  sayMyName(): string {
    return this.name;
  }
}

const felipe = new Person(1, "Felipe", 21);


//O que aprendemos aqui:

//    interface: define um contrato para a classe.

//    implements: obriga a classe a seguir a interface.

//    readonly: impede alterações após a atribuição inicial.