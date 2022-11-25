import { Model, models, model, Schema, isValidObjectId } from 'mongoose';
import UnprocessableEntityError from '../errors/UnprocessableEntityError';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;
  
  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findAll(): Promise<T[]> {
    return this.model.find({});
  }

  public async findById(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new UnprocessableEntityError('Invalid mongo id');
    return this.model.findById({ _id });
  }
}

export default AbstractODM;
