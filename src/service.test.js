import { render } from "@testing-library/react";
import React from "react";
import App from './App';
const service =  require('./service.js');

describe('Exercício One', () => {

    beforeAll(() => {
        render(<App />);
    })

    afterEach(()=> {
        jest.resetAllMocks();
    })

    it('Testes função Randow', () => {

        service.randowNumber = jest.fn().mockReturnValue(10);

        expect(service.randowNumber()).toBe(10);
        expect(service.randowNumber).toHaveBeenCalled();
        expect(service.randowNumber).toHaveBeenCalledTimes(1);
    });

    it('Teste Divisão Randow', () => {
        const divFunc = service.randowNumber.mockImplementation((a, b) => a / b );

        expect(divFunc(20, 2)).toBe(10);
        expect(divFunc).toHaveBeenCalled();
        expect(divFunc).toHaveBeenCalledTimes(1);
        expect(divFunc).toHaveBeenCalledWith(20, 2);
    });

    it('Teste Multiplicação e Reset', () => {
        const multFunc = service.randowNumber.mockImplementation((a, b, c) => a * b * c );

        expect(multFunc(2, 2, 2)).toBe(8);
        expect(multFunc).toHaveBeenCalled();
        expect(multFunc).toHaveBeenCalledTimes(1);
        expect(multFunc).toHaveBeenCalledWith(2, 2, 2);

        service.randowNumber.mockRestore();

        const multFunc2 = service.randowNumber.mockImplementation((a, b) => a * b );
        expect(multFunc2(2, 2)).toBe(4);
        expect(multFunc2).toHaveBeenCalled();
        expect(multFunc2).toHaveBeenCalledTimes(1);
        expect(multFunc2).toHaveBeenCalledWith(2, 2);
    });

    it('Teste success dogPic', async () => {
        
        // global.fetch = async () => ({
        //     json: async () => {},
        // })

        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue({
                menssage: "https://images.dog.ceo/breeds/cockapoo/Scout.jpg",
                status:"success",
            }),
        });

        expect(await service.dogPic()).toEqual({
            menssage: "https://images.dog.ceo/breeds/cockapoo/Scout.jpg",
            status:"success",
        })
        expect(global.fetch).toHaveBeenCalled();
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith('https://dog.ceo/api/breeds/image/random');
    });

    it('Teste fail dogPic', async () => {

        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue({
                menssage: "https://images.dog.ceo/breeds/cockapoo/Sc21313.jpg",
                status:"fail",
            }),
        });

        expect(await service.dogPic()).toEqual({
            menssage: "https://images.dog.ceo/breeds/cockapoo/Sc21313.jpg",
            status:"fail",
        })
        expect(global.fetch).toHaveBeenCalled();
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith('https://dog.ceo/api/breeds/image/random');
    });
});