import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {

  selectedRecipe: any;

  constructor(
    private route: ActivatedRoute,
    private recipeServises: RecipesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.recipeServises.getRecipeDetail(id).subscribe((data) => {
        this.selectedRecipe = data;
        console.log('selectedRecipe - Edit', this.selectedRecipe);
      });
    });
  }
}
