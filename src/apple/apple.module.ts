import { Module } from '@nestjs/common';
import { AppleService } from './apple.service';
import { AppleResolver } from './apple.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { AppleSchema } from './apple.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Apple', schema: AppleSchema }])],
  providers: [AppleService, AppleResolver]
})
export class AppleModule {}
