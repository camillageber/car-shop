import Motorcycle from '../Domains/Motorcycle';
import NotFoundError from '../errors/NotFoundError';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle): Motorcycle {
    return new Motorcycle(motorcycle);
  }

  public async createMoto(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async findAllMotos(): Promise<Motorcycle[]> {
    const motorcycleODM = new MotorcycleODM();
    const findMotos = await motorcycleODM.findAll();
    return findMotos.map((moto) => this.createMotorcycleDomain(moto));
  }

  public async findMotoById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.findById(id);
    if (!motorcycle) throw new NotFoundError('Motorcycle not found');
    return this.createMotorcycleDomain(motorcycle);
  }

  public async updateMoto(id: string, moto: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const updated = await motorcycleODM.update(id, moto);
    if (!updated) throw new NotFoundError('Motorcycle not found');
    return this.createMotorcycleDomain(updated);
  }
}

export default MotorcycleService;
