export interface FoodInterface {
  /**
   * getCal
   */
  getCal(): number;

  /**
   * Set calories
   *
   * @param cal
   */
  setCal(cal: number);

  /**
   * getCarb
   */
  getCarb(): number;

  /**
   * Set carb
   *
   * @param carb
   */
  setCarb(carb: number);

  /**
   * getProtein
   */
  getProtein(): number;

  /**
   * Set protein
   *
   * @param protein
   */
  setProtein(protein: number);

  /**
   * getFat
   */
  getFat(): number;

  /**
   * Set fat
   *
   * @param fat
   */
  setFat(fat: number);
}
