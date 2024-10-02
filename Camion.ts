import { Vehiculo } from './Vehiculo';

// Clase Camion que utiliza composición para incluir una instancia de Vehiculo
export class Camion {
    private vehiculo: Vehiculo;
    private capacidadCarga: number;

    constructor(marca: string, modelo: string, año: number, capacidadCarga: number) {
        this.vehiculo = new Vehiculo(marca, modelo, año);
        this.capacidadCarga = capacidadCarga;
    }

    // Método para obtener la instancia de Vehiculo
    public getVehiculo(): Vehiculo {
        return this.vehiculo;
    }

    // Métodos getter y setter para la propiedad capacidadCarga
    public getCapacidadCarga(): number {
        return this.capacidadCarga;
    }

    public setCapacidadCarga(capacidadCarga: number): void {
        this.capacidadCarga = capacidadCarga;
    }
}