import { FoodAbstract } from './food-abstract.service';

export class VeggieService extends FoodAbstract {
  protected type = 'veggie';
}
