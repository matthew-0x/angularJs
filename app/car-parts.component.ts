import { Component } from '@angular/core';

@Component({

    selector:'car-parts',
    template:
	    `<p>Total car parts in stock are {{totalCarParts()}}</p>
	     <ul>
	       <li *ngFor="let carPart of carParts">
		     <h2>{{carPart.name | uppercase}}</h2>
		     <p>{{carPart.description}}</p>
			 <p>{{carPart.price | currency: 'USD': true}}</p>
			 <p *ngIf="carPart.inStock > 0">{{carPart.inStock}} in stock</p>
			<p *ngIf="carPart.inStock === 0">Out of Stock</p>
          </li>
         </ul>`
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