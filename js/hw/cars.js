let car = {
  make: "Nissan",
  model: "dwkw",
  year: 2019,
  speed: 100.5,
  speedPoints: "км/час",

  showInfo() {
      this.speedStr = `${this.speed} ${this.speedPoints}`;

      let carInfo = "";
      // ...

      console.table(this); 
  },

  calcTime() {
      let l = +prompt("Введите расстояние (км)");
      let t = l / this.speed;
      let timeHours = Math.floor(t);
      let timeMinutes = (t - timeHours) * 60;
      
      console.log(`Необходимое время для преодоления расстояния: ${timeHours 
          + Math.floor(t / 4) } часов и ${Math.round(timeMinutes)} минут`);
  },
};

car.showInfo();
car.calcTime();
