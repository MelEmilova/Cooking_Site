import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  selectedRecipe: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeServises: RecipesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.recipeServises.getRecipeDetail(id).subscribe((data) => {
        this.selectedRecipe = data;
        console.log('selectedRecipe', data);
      });
    });
  }

  goEditRecipe(id) {
    this.router.navigate(['/edit-recipe/', id]);
  }
}
