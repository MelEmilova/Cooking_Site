import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe-madels/recipe.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent {
  recipeId = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  @Input() ListAllRecipe: RecipeModel;

  ngOnInit() {}

  goToDetailsRecipe(id) {
    // console.log('card-recipe ID-1', id);

    this.router.navigate(['/details-recipe/', id]);
    // console.log('card-recipe ID-2', id);
  }
}
