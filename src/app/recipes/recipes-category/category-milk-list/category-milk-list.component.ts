import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service.service';

@Component({
  selector: 'app-category-milk-list',
  templateUrl: './category-milk-list.component.html',
  styleUrls: ['./category-milk-list.component.css']
})
export class CategoryMilkListComponent implements OnInit{


  result: any
  noRecipe: boolean = false;

  constructor(private recipeServisec: RecipesService){}

  ngOnInit(): void {
    this.recipeServisec
    .getAllDairyRecipes()
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
