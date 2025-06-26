"use strict";
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyName() {
        return this.name;
    }
}
const felipe = new Person(1, "Felipe", 21);
//O que aprendemos aqui:
//    interface: define um contrato para a classe.
//    implements: obriga a classe a seguir a interface.
//    readonly: impede alterações após a atribuição inicial.
