/**
 * Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
 * и следующие функции для работы с этим объектом:
 *  Функция для вывода на экран информации об автомобиле;
 *  Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
 * Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
 */

let auto = {
  manufacturer: "Mercedes-Benz",
  model: "GLE SUV",
  yearOfManufacture: "2019 year",
  averageSpeed: 200,
  autoinfo: function () {
      console.log(`${this.manufacturer} ${this.yearOfManufacture} "${this.model}"  ${this.averageSpeed}`);
  },
  getTime: function(distances) {
      let time = distances / this.averageSpeed
      if (time>=4){
          let a = +(time / 4).toFixed(1)
          time = (time + a)
      }
      return `${time} h`
  }
  
}
console.log(auto);
auto.autoinfo();
console.log(auto.getTime(1800));
