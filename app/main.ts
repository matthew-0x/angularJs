import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({

    selector:'my-app',
    template:
       `<h1>{{title}}</h1>
      	<ul>
	  <li *ngFor="let carPart of carParts">
	    <h2>{{carPart.name}}</h2>
	    <p>{{carPart.description}}</p>
	    <p *ngIf="carpart.inStock > 0">{{carPart.inStock}} in stock</p>
	    <p *ngIf="carpart.inStock === 0">Out of Stock</p>
	  </li>
	</ul>` 
   
})
class AppComponent{

 title = "Ultra Racing";
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

}


@NgModule({

  declarations: [ AppComponent ],
  imports: [ BrowserModule ],
  bootstrap: [ AppComponent ]
  
  })
class AppModule{ }

 platformBrowserDynamic().bootstrapModule(AppModule);






