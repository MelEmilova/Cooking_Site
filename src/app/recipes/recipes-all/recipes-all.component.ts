import { Component, Input } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe-madels/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service.service';

@Component({
  selector: 'app-recipes-all',
  templateUrl: './recipes-all.component.html',
  styleUrls: ['./recipes-all.component.css']
})

export class RecipesAllComponent {
  result: any
  
  @Input('recipe') recipe: RecipeModel


 constructor(private recipeServisec: RecipesService){}

 ngOnInit(){
  this.recipeServisec
    .getAllRecipe()
    .subscribe(data => {
      this.result = data
      console.log('All recipes', this.result)
    });
 }
}
