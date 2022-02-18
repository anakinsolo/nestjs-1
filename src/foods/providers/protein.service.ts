import { Injectable } from '@nestjs/common';
import { FoodAbstract } from './food-abstract.service';

@Injectable()
export class ProteinService extends FoodAbstract {
  protected type = 'protein';
}
