import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './cats.controller';
import { AppService } from './app.service';
import { FoodModule } from './foods/foods.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [FoodModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
