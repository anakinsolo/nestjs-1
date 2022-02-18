import { Module } from '@nestjs/common';
import { FoodController } from './controllers/foods.controller';
import { FoodRepository } from './providers/food-repository.service';
import { ProteinService } from './providers/protein.service';

@Module({
  imports: [],
  controllers: [FoodController],
  providers: [FoodRepository, ProteinService],
})
export class FoodModule {}
