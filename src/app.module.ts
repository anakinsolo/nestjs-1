import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './cats.controller';
import { AppService } from './app.service';
import { FoodModule } from './foods/foods.module';

@Module({
  imports: [FoodModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
