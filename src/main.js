import { Customer } from "./cliente.js";
import { Taxes } from "./impuesto.js";

const showImpuesto = document.getElementById("showImpuesto");

const taxIn = new Taxes(1000, 200);

const user1 = new Customer("Cliente uno", taxIn);

console.log(`El impuesto a pagar es ${user1.calcularTax()}`);

showImpuesto.append(`
Impuesto a pagar ${user1.calcularTax()} ,
Monto Bruto Anual ${user1.taxes.brutoAnual} ,
Deducciones ${user1.taxes.deducciones}
`);

console.log(user1);
