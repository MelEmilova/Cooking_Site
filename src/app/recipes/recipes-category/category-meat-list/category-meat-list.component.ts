import { Component, OnInit} from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service.service';

@Component({
  selector: 'app-category-meat-list',
  templateUrl: './category-meat-list.component.html',
  styleUrls: ['./category-meat-list.component.css']
})
export class CategoryMeatListComponent implements OnInit {

  result: any
  noRecipe: boolean = false
constructor(private recipeServisec: RecipesService){}


ngOnInit(): void {
   this.recipeServisec
    .getAllMeatRecipes()
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
