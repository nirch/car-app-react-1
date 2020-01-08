
class CarModel {
  constructor(brandOrObject, model, year, km, id) {
    if (arguments.length === 1) {
      this.brand = brandOrObject.brand;
      this.model = brandOrObject.model;
      this.year = brandOrObject.year;
      this.km = brandOrObject.km;
      this.id = brandOrObject.id;
    } else {
      this.brand = brandOrObject;
      this.model = model;
      this.year = year;
      this.km = km;
      this.id = id;
    }
  }
  
  kmPerYear() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.year + 1;
    return this.km / age;
  }
}
export default CarModel;