"use strict";

var _cliente = require("./cliente.js");

var _impuesto = require("./impuesto.js");

var showImpuesto = document.getElementById("showImpuesto");
var taxIn = new _impuesto.Taxes(1000, 200);
var user1 = new _cliente.Customer("Cliente uno", taxIn);
console.log("El impuesto a pagar es ".concat(user1.calcularTax()));
showImpuesto.append("\nImpuesto a pagar ".concat(user1.calcularTax(), " ,\nMonto Bruto Anual ").concat(user1.taxes.brutoAnual, " ,\nDeducciones ").concat(user1.taxes.deducciones, "\n"));
console.log(user1);