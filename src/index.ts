import { Persona } from './persona';
import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';

const primeraResidenciaEsmeralda = new Direccion(
  "Calle Morrones",
  3,
  3,
  "B",
  50008,
  "Madrid",
  "Madrid"
)

const segundaResidenciaEsmeralda = new Direccion(
  "Calle Carpe",
  3,
  3,
  "A",
  50300,
  "Calatayud",
  "Zaragoza"
)

const mailEsmeralda = new Mail(
  "empresa",
  "e.lopez.arellano@accenture.com"
)

const telefonoFijoEsmeralda = new Telefono(
  "fijo",
  923123456
)

const telefonoMovilEsmeralda = new Telefono(
  "movil",
  643209009
)

const datosEsmeralda = new Persona(
  'Esmeralda',
  'Lopez Arellano',
  25,
  '53619021H',
  new Date(1998, 5, 2),
  'naranja',
  'mujer',
  [primeraResidenciaEsmeralda, segundaResidenciaEsmeralda],
  [mailEsmeralda],
  [telefonoFijoEsmeralda, telefonoMovilEsmeralda],
  "No hay nota que añadir"
);

const primeraResidenciaEnrique = new Direccion(
  "Calle Sacre",
  25,
  false,
  false,
  22334,
  "Pozuelo",
  "Madrid"
)

const segundaResidenciaEnrique = new Direccion(
  "Calle Cigorgo",
  34,
  false,
  false,
  28220,
  "Madrid",
  "Madrid"
)

const mailPersonalEnrique = new Mail(
  "personal",
  "enrique.mendi@gmail.com"
)


const telefonoFijoEnrique = new Telefono(
  "fijo",
  9654321789
)

const telefonoMovilFedericoEnrique = new Telefono(
  "movil",
  609823456
)

const datosEnrique = new Persona(
  'Enrique',
  'Mendiguren Gutierrez',
  32,
  '03567876T',
  new Date(1990, 11, 9),
  'negro',
  'hombre',
  [primeraResidenciaEnrique, segundaResidenciaEnrique],
  [mailPersonalEnrique],
  [telefonoFijoEnrique, telefonoMovilFedericoEnrique],
  "Vive en verano en la segunda residencia"
);

const primeraResidenciaEric = new Direccion(
  "Calle Leonardo da Vinci",
  27,
  79,
  "E",
  27727,
  "Zaragoza",
  "Zaragoza"
)


const mailPersonalEric = new Mail(
  "personal",
  "ismaeldelospuentes@gmail.com"
)

const telefonoMovilEric = new Telefono(
  "movil",
  600996521
)

const datosEric = new Persona(
  'Eric',
  'Lopez Arellano',
  27,
  '53427021V',
  new Date(1997, 1, 7),
  'Verde',
  'hombre',
  [primeraResidenciaEric],
  [mailPersonalEric],
  [telefonoMovilEric],
  "Solo posee una residencia"
);

console.log("Contactos antes del cambio:");
console.log(datosEsmeralda);
console.log(datosEnrique);
console.log(datosEric);

const agenda: Array<Persona> = new Array(datosEsmeralda, datosEnrique, datosEric);

const dniABuscar: string = "53619021H";

const personaAEditar: Persona = agenda.find(persona => persona.dni === dniABuscar) as Persona;

const nuevaDireccion = new Direccion(
  "Calle Granadilla",
  26,
  4,
  false,
  777777,
  "Las Rozas",
  "Madrid"
)

const nuevoMail = new Mail(
  "personal",
  "esme.lopez@gmail.com"
)

const nuevoTelefono = new Telefono(
  "fijo",
  916340353
)

personaAEditar.añadirNuevaDireccion(nuevaDireccion);
personaAEditar.añadirNuevoMail(nuevoMail);
personaAEditar.añadirNuevoTelefono(nuevoTelefono);

console.log("Contacto después del cambio:");
console.log(datosEsmeralda);