import Inventario from './Singleton/inventario.js';

// SINGLETON
const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
inventario.agregarEquipo("Lenovo", "Portátil", "En reparación");
console.log(inventario.listarEquipos()); 