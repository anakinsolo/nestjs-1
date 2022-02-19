import { Injectable } from '@nestjs/common';
import { FoodAbstract } from './food-abstract.service';

@Injectable()
export class FoodRepository {
  private allFoods = {
    carb: ['rice', 'bread'],
    protein: ['chicken', 'salmon', 'lean_pork'],
    veggie: ['zucchini', 'brussel_sprout', 'kale'],
  };

  public getAllFoodTypes() {
    return this.allFoods;
  }

  public getCarbSource() {
    return this.allFoods.carb;
  }

  public getProteinSource() {
    return this.allFoods.protein;
  }

  public getVeggieSource() {
    return this.allFoods.veggie;
  }

  public getNewFoodSource(type: string) {
    const newFoodSource = new FoodAbstract(type);

    return newFoodSource;
  }

  public createNewFoodSource(data): FoodAbstract {
    const type = data['type'];
    const newFoodSource = this.getNewFoodSource(type);

    newFoodSource.setCal(data[FoodAbstract.ATTR_CAL]);
    newFoodSource.setCarb(data[FoodAbstract.ATTR_CARB]);
    newFoodSource.setFat(data[FoodAbstract.ATTR_FAT]);
    newFoodSource.setProtein(data[FoodAbstract.ATTR_PROTEIN]);

    this.saveFoodSource(newFoodSource);

    return newFoodSource;
  }

  public saveFoodSource(foodSource: FoodAbstract) {
    return foodSource.save();
  }
}
