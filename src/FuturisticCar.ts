import { IVehicle, IVehicleFly } from './interfaces';

export default class FuturisticCar implements IVehicle, IVehicleFly {
  // eslint-disable-next-line class-methods-use-this
  drive(): void { console.log('Drive a futuristic car'); }

  // eslint-disable-next-line class-methods-use-this
  fly(): void { console.log('Flying a futuristic car'); }
}
