// Análisis personal para Juanita. 
function encontrarPersona( personaEnBusqueda) {
    return salarios.find( persona => persona.name == personaEnBusqueda);
}
function medianaPorPersona(nombrePersona) {
    const trabajosPersona = encontrarPersona(nombrePersona).trabajos;
    const salariosPersona = trabajosPersona.map(function(element){
        return element.salario;
    });
   const medianaSalarios =  PlatziMath.calcularMediana(salariosPersona);
   return medianaSalarios;
}
function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    let porcentajeCrecimiento = [];
    for (let index = 1; index < trabajos.length; index++) {
        let salarioActual = trabajos[index].salario;
        let salarioPasado = trabajos[index - 1].salario;
        let crecimiento = salarioActual - salarioPasado;
        porcentajeCrecimiento.push( crecimiento / salarioPasado);
    }
    const aumento =  PlatziMath.calcularMediana(porcentajeCrecimiento);
    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    
    return (aumento * ultimoSalario) + ultimoSalario;
} 
function restructurarArray() {
  const empresas = {};
  for (const persona of salarios) {
    for (const trabajo of persona.trabajos) {
      if (!empresas[trabajo.empresa]) {
        empresas[trabajo.empresa] = {}
      }
      if (!empresas[trabajo.empresa][trabajo.year]) {
        empresas[trabajo.empresa][trabajo.year] = []
      }
      empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
  }
  return empresas; 
}
function medianaEmpresaYear(empresa, year) {
  const empresaEvaluar = restructurarArray();
  if (!empresaEvaluar[empresa]) {
    return "No tenemos datos de la empresa: " + empresa;
  }else if(!empresaEvaluar[empresa][year]) {
    return "No tenemos datos de la empresa: " + empresa + " en el año: " + year; 
  }
  else {
    const medianaEmpresa = PlatziMath.calcularMediana(empresaEvaluar[empresa][year]);
    return medianaEmpresa; 
  }
}
function BuscarPropiedadesObject(obj, objName) {
  let result = [];
  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      result.push(i);
    }
  }
  return result;
}
function ProyeccionEmpresa(namEmpresa) {
  const empresaEvaluar = restructurarArray();
  const empresa = empresaEvaluar[namEmpresa];
  const buscarYear = BuscarPropiedadesObject(empresa, "empresa");
  const mediaYear = [];
  buscarYear.forEach(element => {
    mediaYear.push(PlatziMath.calcularMediana(empresa[element]));
  });
  let porcentajeCrecimiento = [];
  for (let index = 1; index < mediaYear.length; index++) {
    let salarioActual = mediaYear[index];
    let salarioPasado = mediaYear[index - 1];
    let crecimiento = salarioActual - salarioPasado;
    porcentajeCrecimiento.push( crecimiento / salarioPasado);
  }

  return PlatziMath.calcularMediana(porcentajeCrecimiento);
}
// Analisis General
function MedianaGeneral() {
  const medianaPorPers = salarios.map( persona => medianaPorPersona(persona.name));
  const mediana = PlatziMath.calcularMediana(medianaPorPers);
  return mediana;
}
// Analisis al top 10% 
function top10PorCiento() {
  const medianaPorPers = salarios.map( persona => medianaPorPersona(persona.name));
  const diezPorciento = medianaPorPers.length / 10;
  const diezPorcientoArray = medianaPorPers.slice((medianaPorPers.length -  diezPorciento), medianaPorPers.length);
  const mediana10 = PlatziMath.calcularMediana(diezPorcientoArray);
  return mediana10
}