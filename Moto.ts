import { Vehiculo } from './Vehiculo';

// Clase Moto que utiliza composición para incluir una instancia de Vehiculo
export class Moto {
    private vehiculo: Vehiculo;
    private cilindrada: number;

    constructor(marca: string, modelo: string, año: number, cilindrada: number) {
        this.vehiculo = new Vehiculo(marca, modelo, año);
        this.cilindrada = cilindrada;
    }

    // Método para obtener la instancia de Vehiculo
    public getVehiculo(): Vehiculo {
        return this.vehiculo;
    }

    // Métodos getter y setter para la propiedad cilindrada
    public getCilindrada(): number {
        return this.cilindrada;
    }

    public setCilindrada(cilindrada: number): void {
        this.cilindrada = cilindrada;
    }
}