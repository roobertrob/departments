export default class DepartmentModel {
  #id: number;
  #nome: string;

  constructor(
    id: number, 
    nome: string,
  ) {
    this.#id = id;
    this.#nome = nome;
  }

  get id() {
    return this.#id;
  }
  get nome() {
    return this.#nome;
  }
  ToObject() {
    return {
      id: this.#id,
      nome: this.#nome,
    };
  }
}
