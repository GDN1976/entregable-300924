// Clase base Vehiculo que encapsula las propiedades comunes de todos los vehículos
export class Vehiculo {
    private marca: string;
    private modelo: string;
    private año: number;

    constructor(marca: string, modelo: string, año: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    // Métodos getter y setter para la propiedad marca
    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    // Métodos getter y setter para la propiedad modelo
    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    // Métodos getter y setter para la propiedad año
    public getAño(): number {
        return this.año;
    }

    public setAño(año: number): void {
        this.año = año;
    }
}