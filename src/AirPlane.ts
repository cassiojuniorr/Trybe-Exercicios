import { IVehicleFly } from './interfaces';

export default class AirPlane implements IVehicleFly {
    // eslint-disable-next-line class-methods-use-this
    fly(): void { console.log('seila'); }
}