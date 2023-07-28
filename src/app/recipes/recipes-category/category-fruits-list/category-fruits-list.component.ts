import { Component } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service.service';

@Component({
  selector: 'app-category-fruits-list',
  templateUrl: './category-fruits-list.component.html',
  styleUrls: ['./category-fruits-list.component.css']
})
export class CategoryFruitsListComponent {

  result: any
  noRecipe: boolean = false
constructor(private recipeServisec: RecipesService){}


  ngOnInit(): void {
   this.recipeServisec
    .getAllFruitsRecipes()
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
