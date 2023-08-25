import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe-madels/recipe.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css'],
})
export class CategoryCardComponent implements OnInit {

  @Input() listRecipeByCategory: RecipeModel;
  @Output() newItemEvent = new EventEmitter<any>();

  ngOnInit(): void {}


}
