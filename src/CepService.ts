import { IFooCepAPI } from './IFooCepAPI';

class CepService {
  private readonly cepApi: IFooCepAPI;

  constructor(cepApi: IFooCepAPI) {
    this.cepApi = cepApi;
  }

  async addressByCep(cep: string, num: number): Promise<string> {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  async cepByAddress(address: string, num: number): Promise<string> {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;