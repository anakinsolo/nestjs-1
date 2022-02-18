import { Injectable } from '@nestjs/common';
import { FoodAbstract } from './food-abstract.service';
import { ProteinService } from './protein.service';

@Injectable()
export class FoodRepository 
{
  private allFoods = {
    carb: ['rice', 'bread'],
    protein: ['chicken', 'salmon', 'lean_pork'],
    veggie: ['zucchini', 'brussel_sprout', 'kale'],
  };

  getAllFoodTypes() {
    return this.allFoods;
  }

  getCarbSource() {
    return this.allFoods.carb;
  }

  getProteinSource() {
    return this.allFoods.protein;
  }

  getVeggieSource() {
    return this.allFoods.veggie;
  }

  public saveFoodSource(foodSource: FoodAbstract) {
    return foodSource.save();
  }
}
