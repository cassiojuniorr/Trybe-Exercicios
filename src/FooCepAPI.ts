import { IFooCepAPI } from "./IFooCepAPI";

class FooCepAPI implements IFooCepAPI {
  // eslint-disable-next-line class-methods-use-this
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `O endereço para o "CEP:${cep}, n°:${number}" é " endereço foo"`;
  }

  // eslint-disable-next-line class-methods-use-this
  async getCepByAddress(address: string, number: number): Promise<string> {
    return `O CEP para: "${address}, n°: ${number}" é "CEP baz"`;
  }
}

export default FooCepAPI;