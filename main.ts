import { RegistroAutomotor } from './RegistroAutomotor';
import { Auto } from './Auto';
import { Moto } from './Moto';
import { Camion } from './Camion';

const registro = new RegistroAutomotor();

// Crear instancias de vehículos
const auto1 = new Auto('Toyota', 'Corolla', 2020, 'Sedán');
const moto1 = new Moto('Yamaha', 'MT-07', 2019, 689);
const camion1 = new Camion('Volvo', 'FH16', 2018, 25000);

// Agregar vehículos al registro
registro.agregarAuto(auto1);
registro.agregarMoto(moto1);
registro.agregarCamion(camion1);

// Mostrar todos los vehículos
console.log('Autos:', registro.getAutos());
console.log('Motos:', registro.getMotos());
console.log('Camiones:', registro.getCamiones());

// Modificar un vehículo
const autoModificado = new Auto('Toyota', 'Corolla', 2021, 'Sedán');
registro.modificarAuto(0, autoModificado);

// Dar de baja un vehículo
registro.darDeBajaMoto(0);

// Mostrar todos los vehículos después de las modificaciones
console.log('Autos después de modificar:', registro.getAutos());
console.log('Motos después de dar de baja:', registro.getMotos());
console.log('Camiones:', registro.getCamiones());