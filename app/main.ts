import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({

    selector:'my-app',
    template:
       `<h1>{{title}}</h1>
      	<h2>{{carPart.name}}</h2>
	<p>{{carPart.description}}</p>
	<p>{{carPart.inStock}} in stock</p>`

   
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
    "inStock" : 3
	   
   }];

}


@NgModule({

  declarations: [ AppComponent ],
  imports: [ BrowserModule ],
  bootstrap: [ AppComponent ]
  
  })
class AppModule{ }

 platformBrowserDynamic().bootstrapModule(AppModule);






