import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service.service';

@Component({
  selector: 'app-category-vegetables-list',
  templateUrl: './category-vegetables-list.component.html',
  styleUrls: ['./category-vegetables-list.component.css']
})
export class CategoryVegetablesListComponent implements OnInit{

  result: any;
  noRecipe: boolean = false;

  constructor(private recipeServisec: RecipesService){}

  ngOnInit(): void {
  this.recipeServisec
    .getAllVegetablesRecipes()
    .subscribe(data => {
      this.result = data
         if(this.result[0] !== null){
        // console.log('Mel ima')
      }else{
        // console.log('Nama')
        this.noRecipe = true
      }
    });
  }
}
