import { Component } from '@angular/core';

@Component({

    selector:'car-parts',
    templateUrl: 'app/car-parts.component.html',
	styleUrls: ['app/car-parts.component.css']
	
    })
export class CarPartsComponent{

  carParts = [{
	  "id" : 1,
	  "name" : "Super tires",
	  "description" : "The best tires",
	  "inStock" : 5
	  },
	{
	 "id" : 2,
	 "name" : "Second Super tires",
	 "description" : "Another best tires",
	 "inStock" : 0
    }];

    totalCarParts(){
       let sum=0;
       for(let carPart of this.carParts){
	      sum += carPart.inStock;
	   }
	   return sum;
    }

}