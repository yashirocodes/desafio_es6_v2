class Customer {
  constructor(nombre, tax) {
    this.nameCustomer = nombre;
    this.taxes = tax;
  }
  get getNameCustomer() {
    return this.nameCustomer;
  }
  set setNameCustomer(nombre) {
    this.nameCustomer.push(nombre);
  }
  calcularTax(){
      return((this.taxes.brutoAnual - this.taxes.deducciones) * 21) / 100;
  }
}
export {Customer}
