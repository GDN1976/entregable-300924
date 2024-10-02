import { Vehiculo } from './Vehiculo';

// Clase Auto que utiliza composición para incluir una instancia de Vehiculo
export class Auto {
    private vehiculo: Vehiculo;
    private tipo: string;

    constructor(marca: string, modelo: string, año: number, tipo: string) {
        this.vehiculo = new Vehiculo(marca, modelo, año);
        this.tipo = tipo;
    }

    // Método para obtener la instancia de Vehiculo
    public getVehiculo(): Vehiculo {
        return this.vehiculo;
    }

    // Métodos getter y setter para la propiedad tipo
    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }
}