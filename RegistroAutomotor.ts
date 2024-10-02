import { Auto } from './Auto';
import { Moto } from './Moto';
import { Camion } from './Camion';

// Clase RegistroAutomotor que maneja la colección de vehículos
export class RegistroAutomotor {
    private autos: Auto[] = [];
    private motos: Moto[] = [];
    private camiones: Camion[] = [];

    // Método para agregar un auto a la colección
    public agregarAuto(auto: Auto): void {
        this.autos.push(auto);
    }

    // Método para agregar una moto a la colección
    public agregarMoto(moto: Moto): void {
        this.motos.push(moto);
    }

    // Método para agregar un camión a la colección
    public agregarCamion(camion: Camion): void {
        this.camiones.push(camion);
    }

    // Métodos para obtener las colecciones de vehículos
    public getAutos(): Auto[] {
        return this.autos;
    }

    public getMotos(): Moto[] {
        return this.motos;
    }

    public getCamiones(): Camion[] {
        return this.camiones;
    }

    // Métodos para modificar un vehículo en la colección
    public modificarAuto(index: number, auto: Auto): void {
        if (index >= 0 && index < this.autos.length) {
            this.autos[index] = auto;
        }
    }

    public modificarMoto(index: number, moto: Moto): void {
        if (index >= 0 && index < this.motos.length) {
            this.motos[index] = moto;
        }
    }

    public modificarCamion(index: number, camion: Camion): void {
        if (index >= 0 && index < this.camiones.length) {
            this.camiones[index] = camion;
        }
    }

    // Métodos para dar de baja (eliminar) un vehículo de la colección
    public darDeBajaAuto(index: number): void {
        if (index >= 0 && index < this.autos.length) {
            this.autos.splice(index, 1);
        }
    }

    public darDeBajaMoto(index: number): void {
        if (index >= 0 && index < this.motos.length) {
            this.motos.splice(index, 1);
        }
    }

    public darDeBajaCamion(index: number): void {
        if (index >= 0 && index < this.camiones.length) {
            this.camiones.splice(index, 1);
        }
    }
}