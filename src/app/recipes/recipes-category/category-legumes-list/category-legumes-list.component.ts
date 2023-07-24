import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service.service';

@Component({
  selector: 'app-category-legumes-list',
  templateUrl: './category-legumes-list.component.html',
  styleUrls: ['./category-legumes-list.component.css']
})
export class CategoryLegumesListComponent implements OnInit{

  result: any
  noRecipe: boolean = false

  constructor(private recipeServisec: RecipesService){}

  ngOnInit(): void {
     this.recipeServisec
    .getAllLegumesRecipes()
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
