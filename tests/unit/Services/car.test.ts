import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';

describe('Tests of collection Car', function () {
  describe('When creating a new car', function () {
    after(function () {
      sinon.restore();
    });
    it('the request is successful', async function () {
      // Arrange
      const carInput:ICar = {
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      };

      const carOutput: Car = new Car({
        model: 'Outro carro',
        year: 2002,
        color: 'Black',
        status: true,
        id: '63812c4e1175f01e12a25850',
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      });

      sinon.stub(Model, 'create').resolves(carOutput);

      // Action
      const service = new CarService();
      const result = await service.createCar(carInput);
      // Assertion
      expect(result).to.be.deep.equal(carOutput);
    });
  });

  describe('When searching for cars', function () {
    afterEach(function () {
      sinon.restore();
    });
    it('bringing all the cars', async function () {
      const carsOuput: ICar[] = [
        {
          model: 'Carro bonito',
          year: 2014,
          color: 'Red',
          status: true,
          id: '638136c004c79e2e39915fed',
          buyValue: 15.99,
          doorsQty: 4,
          seatsQty: 5,
        },
        {
          model: 'Carro feioso',
          year: 2001,
          color: 'Brown',
          status: true,
          id: '638136d904c79e2e39915fef',
          buyValue: 15.99,
          doorsQty: 4,
          seatsQty: 5,
        },
      ];
      
      sinon.stub(Model, 'find').resolves(carsOuput);
      const service = new CarService();
      const result = await service.findAllCars();

      expect(result).to.be.deep.equal(carsOuput);
    });

    it('bringing a car by id params', async function () {
      const carsOuput: ICar = {
        model: 'Carro feioso',
        year: 2001,
        color: 'Brown',
        status: true,
        id: '638136d904c79e2e39915fef',
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      };
      
      sinon.stub(Model, 'findById').resolves(carsOuput);
      const service = new CarService();
      const result = await service.findCarById('638136d904c79e2e39915fef');

      expect(result).to.be.deep.equal(carsOuput);
    });
  });
});