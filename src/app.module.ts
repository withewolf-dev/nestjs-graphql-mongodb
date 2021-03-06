import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppleModule } from './apple/apple.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot('mongodb+srv://mike:mike001@cluster0.oboei.mongodb.net/graphqltype?retryWrites=true&w=majority'),
    AppleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
