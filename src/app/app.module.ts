import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './custom/header/header.component';
import { FooterComponent } from './custom/footer/footer.component';
import { AboutUsComponent } from './custom/about-us/about-us.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { RecipeFindComponent } from './recipes/recipe-find/recipe-find.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeCreateComponent } from './recipes/recipe-create/recipe-create.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesAllComponent } from './recipes/recipes-all/recipes-all.component';
import { LoaderComponent } from './loader/loader.component';
import { GuardsComponent } from './guards/guards.component';
import { BlockCreateRecipeComponent } from './custom/block-create-recipe/block-create-recipe.component';
import { RecipeCardComponent } from './recipes/recipe-card/recipe-card.component';
import { CategoryCardComponent } from './recipes/recipes-category/category-card/category-card.component';
import { CategoryMeatListComponent } from './recipes/recipes-category/category-meat-list/category-meat-list.component';
import { CategoryMilkListComponent } from './recipes/recipes-category/category-milk-list/category-milk-list.component';
import { CategoryVegetablesListComponent } from './recipes/recipes-category/category-vegetables-list/category-vegetables-list.component';
import { CategoryLegumesListComponent } from './recipes/recipes-category/category-legumes-list/category-legumes-list.component';


import { CKEditorModule } from 'ckeditor4-angular';


import { RecipesCategoryComponent } from './recipes/recipes-category/recipes-category.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    LoginComponent,
    RegisterComponent,
    RecipeFindComponent,
    RecipeDetailsComponent,
    RecipeCreateComponent,
    RecipeEditComponent,
    RecipesAllComponent,
    LoaderComponent,
    GuardsComponent,
    BlockCreateRecipeComponent,
    RecipeCardComponent,
    CategoryCardComponent,
    CategoryMeatListComponent,
    CategoryMilkListComponent,
    CategoryVegetablesListComponent,
    CategoryLegumesListComponent,
    RecipesCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
