import { Controller, Get } from '@nestjs/common';
import { FoodRepository } from '../providers/food-repository.service';
import { ProteinService } from '../providers/protein.service';

@Controller('foods')
export class FoodController 
{
  private foodRepository: FoodRepository;

  constructor(
    foodRepository: FoodRepository
  ) {
    this.foodRepository = foodRepository;
  }

  @Get()
  getAll() {
    return this.foodRepository.getAllFoodTypes();
  }

  @Get('generate')
  getGeneratedMenu(): string {
    return 'Return a generated menu';
  }

  @Get('carb')
  getCarbs() {
    return this.foodRepository.getCarbSource();
  }

  @Get('protein')
  getProteins() {
    return this.foodRepository.getProteinSource();
  }

  @Get('veggie')
  getVeggies() {
    return this.foodRepository.getVeggieSource();
  }

  @Get('save')
  saveProtein() {
    let proteinService = new ProteinService();
    return this.foodRepository.saveFoodSource(proteinService);
  }
}
