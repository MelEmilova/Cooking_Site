import { Component, Input } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe-details/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service.service';

@Component({
  selector: 'app-recipes-category',
  templateUrl: './recipes-category.component.html',
  styleUrls: ['./recipes-category.component.css']
})
export class RecipesCategoryComponent {

  result: any
  noRecipe: boolean = false;
    @Input('recipe') recipe: RecipeModel

  constructor(private recipeServisec: RecipesService){}



  



}
