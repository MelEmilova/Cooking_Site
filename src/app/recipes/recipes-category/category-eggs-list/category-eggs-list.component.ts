import { Component } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service.service';

@Component({
  selector: 'app-category-eggs-list',
  templateUrl: './category-eggs-list.component.html',
  styleUrls: ['./category-eggs-list.component.css']
})
export class CategoryEggsListComponent {

  result: any
  noRecipe: boolean = false
constructor(private recipeServisec: RecipesService){}


ngOnInit(): void {
   this.recipeServisec
    .getAllEggsRecipes()
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
