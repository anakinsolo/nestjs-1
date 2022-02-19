import { FoodInterface } from '../interfaces/food.interface';

/**
 * class FoodAbstract for all food types
 *
 * Missing methods
 * getName, setName, toJsonObject
 *
 * @todo: add above missing methods and attributes
 */
export class FoodAbstract implements FoodInterface {
  public static ATTR_CAL = 'cal';
  public static ATTR_CARB = 'carb';
  public static ATTR_PROTEIN = 'protein';
  public static ATTR_FAT = 'fat';

  /**
   * Model type, eg: carb, protein, veggie
   */
  protected type: string;

  /**
   * Calories number
   */
  protected cal: number;

  /**
   * Carb number
   */
  protected carb: number;

  /**
   * Protein number
   */
  protected protein: number;

  /**
   * Fat number
   */
  protected fat: number;

  /**
   * @param type
   */
  constructor(type = '') {
    this.type = type;
  }

  /**
   * Get calories number
   *
   * @returns number
   */
  public getCal(): number {
    return this.cal;
  }

  /**
   * Set calories number
   *
   * @param cal
   */
  public setCal(cal: number) {
    this.cal = cal;
  }

  /**
   * Get carb number
   *
   * @returns number
   */
  public getCarb(): number {
    return this.carb;
  }

  /**
   * Set carb number
   *
   * @param carb
   */
  public setCarb(carb: number) {
    this.carb = carb;
  }

  /**
   * Get protein number
   *
   * @returns number
   */
  public getProtein(): number {
    return this.protein;
  }

  /**
   * Set protein number
   *
   * @param protein
   */
  public setProtein(protein: number) {
    this.protein = protein;
  }

  /**
   * Get fat number
   *
   * @returns number
   */
  public getFat(): number {
    return this.fat;
  }

  /**
   * Set fat number
   *
   * @param fat
   */
  public setFat(fat: number) {
    this.fat = fat;
  }

  /**
   * Save the food model
   *
   * @returns string
   */
  public save(): string {
    return 'This saves the model type ' + this.type;
  }
}
