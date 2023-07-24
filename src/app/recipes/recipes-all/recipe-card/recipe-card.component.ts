import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe-details/recipe.model';



@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {

  @Input() recipes: any = RecipeModel;

ngOnInit(){
  console.log( this.recipes, 'Mel')
}
  
}
