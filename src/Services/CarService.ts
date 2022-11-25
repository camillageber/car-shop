import Car from '../Domains/Car';
import NotFoundError from '../errors/NotFoundError';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar): Car {
    return new Car(car);
  }
  
  public async createCar(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async findAllCars(): Promise<Car[]> {
    const carODM = new CarODM();
    const findCars = await carODM.findAll();
    return findCars.map((car) => this.createCarDomain(car));
  }

  public async findCarById(id: string) {
    const carODM = new CarODM();
    const car = await carODM.findById(id);
    if (!car) throw new NotFoundError('Car not found');
    return this.createCarDomain(car);
  }
}
export default CarService;
