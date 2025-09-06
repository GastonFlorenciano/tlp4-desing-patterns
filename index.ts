import Inventario from './Singleton/inventario.js';
import EquipoFactory from './Factory Method/factoryDevices.js';

// SINGLETON
const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
inventario.agregarEquipo("Lenovo", "Portátil", "En reparación");
console.log(inventario.listarEquipos()); 

// FACTORY METHOD
const factory = new EquipoFactory();
const equipo1 = factory.crearEquipo("notebook", "Dell XPS 13", "16GB", "Intel i7");
const equipo2 = factory.crearEquipo("desktop", "HP Pavilion", "32GB", "AMD Ryzen 5");
console.log(equipo1.detalles());
console.log(equipo2.detalles());