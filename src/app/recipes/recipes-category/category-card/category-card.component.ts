import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe-details/recipe.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit{

  @Input () listRecipeByCategory: RecipeModel

  ngOnInit(): void {
  }

}
