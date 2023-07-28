import { Component } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service.service';

@Component({
  selector: 'app-category-pasta-list',
  templateUrl: './category-pasta-list.component.html',
  styleUrls: ['./category-pasta-list.component.css']
})
export class CategoryPastaListComponent {

  result: any
  noRecipe: boolean = false
constructor(private recipeServisec: RecipesService){}


  ngOnInit(): void {
   this.recipeServisec
    .getAllPastaRecipes()
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
