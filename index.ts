import Inventario from './Singleton/inventario.js';
import EquipoFactory from './Factory Method/factoryDevices.js';
import { Equipo, Soporte } from './Observer/notifier.js';
import { AdaptadorInventario, InventarioViejo } from './Adapter/inventarioViejo.js';

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

// OBSERVER
const soporte = new Soporte();
const equipo= new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("En reparación");

// ADAPTER
const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());