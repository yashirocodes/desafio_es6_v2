"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Taxes = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Taxes = /*#__PURE__*/function () {
  function Taxes(montoBrutoAnual, deducciones) {
    _classCallCheck(this, Taxes);

    this.brutoAnual = montoBrutoAnual;
    this.deducciones = deducciones;
  }

  _createClass(Taxes, [{
    key: "getMontoBruto",
    get: function get() {
      return this.brutoAnual;
    }
  }, {
    key: "setMontoBruto",
    set: function set(brutoAnual) {
      this.brutoAnual.push(brutoAnual);
    }
  }, {
    key: "getDeducciones",
    get: function get() {
      return this.deducciones;
    }
  }, {
    key: "setDeducciones",
    set: function set(deducciones) {
      this.deducciones.push(deducciones);
    }
  }]);

  return Taxes;
}();

exports.Taxes = Taxes;