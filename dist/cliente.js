"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Customer = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Customer = /*#__PURE__*/function () {
  function Customer(nombre, tax) {
    _classCallCheck(this, Customer);

    this.nameCustomer = nombre;
    this.taxes = tax;
  }

  _createClass(Customer, [{
    key: "getNameCustomer",
    get: function get() {
      return this.nameCustomer;
    }
  }, {
    key: "setNameCustomer",
    set: function set(nombre) {
      this.nameCustomer.push(nombre);
    }
  }, {
    key: "calcularTax",
    value: function calcularTax() {
      return (this.taxes.brutoAnual - this.taxes.deducciones) * 21 / 100;
    }
  }]);

  return Customer;
}();

exports.Customer = Customer;