class Taxes {
  constructor(montoBrutoAnual, deducciones) {
    this.brutoAnual = montoBrutoAnual;
    this.deducciones = deducciones;
  }
  get getMontoBruto() {
    return this.brutoAnual;
  }
  set setMontoBruto(brutoAnual) {
    this.brutoAnual.push(brutoAnual);
  }
  get getDeducciones() {
    return this.deducciones;
  }
  set setDeducciones(deducciones) {
    this.deducciones.push(deducciones);
  }
}

export { Taxes };
