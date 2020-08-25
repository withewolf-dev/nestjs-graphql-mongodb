import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Apple } from './interfaces/apple.interface';
import {AppleInput} from './inputs/apple.inputs'
import { AppleType } from './dto/create-apple.dto'


@Injectable()
export class AppleService {

    constructor(@InjectModel('Apple') private appleModel: Model<Apple>) {}

    async create(createAppleDto: AppleInput): Promise<AppleType> {
        const createdApple = new this.appleModel(createAppleDto);
        return await createdApple.save();
      }
    
      async findAll(): Promise<AppleType[]> {
        return await this.appleModel.find().exec();
      }
    
      async findOne(id: string): Promise<AppleType> {
        return await this.appleModel.findOne({ _id: id });
      }
    
      async delete(id: string): Promise<AppleType> {
        return await this.appleModel.findByIdAndRemove(id);
      }
    
      async update(id: string, apple: {title:string,price:number,description:string}): Promise<AppleType> {
        return await this.appleModel.findByIdAndUpdate(id, apple, { new: true });
      }
}
