import { Component, OnInit } from '@angular/core';
import { Car } from '../classes/car';


import { CarService } from '../Service/carservice';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {


  availableCars: Car[];

  selectedCars: Car[];

  draggedCar: Car;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.selectedCars = [];
        this.carService.getCarsSmall().then(cars => this.availableCars = cars);
  }
dragStart(event,car: Car) {
        this.draggedCar = car;
    }

    drop(event) {
        if(this.draggedCar) {
            let draggedCarIndex = this.findIndex(this.draggedCar);
            this.selectedCars = [...this.selectedCars, this.draggedCar];
            this.availableCars = this.availableCars.filter((val,i) => i!=draggedCarIndex);
            this.draggedCar = null;
        }
    }

    dragEnd(event) {
        this.draggedCar = null;
    }

    findIndex(car: Car) {
        let index = -1;
        for(let i = 0; i < this.availableCars.length; i++) {
            if(car.inSeason === this.availableCars[i].inSeason) {
                index = i;
                break;
            }
        }
        return index;
    }

}