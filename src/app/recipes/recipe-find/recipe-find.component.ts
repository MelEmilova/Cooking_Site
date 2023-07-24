import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-find',
  templateUrl: './recipe-find.component.html',
  styleUrls: ['./recipe-find.component.css']
})


export class RecipeFindComponent {

// taka wzemam value na izbraniq zalan4uk
// towa e bez da imame form
  printData(event: any){
    console.log(event.target.value)
  }
}
