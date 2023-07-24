import { RouterModule, Routes } from '@angular/router';
import { RecipesAllComponent } from "./recipes/recipes-all/recipes-all.component";
import { HomeComponent } from "./custom/home/home.component";
import { AboutUsComponent } from "./custom/about-us/about-us.component";
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { createComponent } from '@angular/core';
import { RecipeCreateComponent } from './recipes/recipe-create/recipe-create.component';
import { CategoryMeatListComponent } from './recipes/recipes-category/category-meat-list/category-meat-list.component';


export const routes: Routes = [
// Това са пътищата които се виждат е URL
//taka se smenqt komponentite
    {
      path: '',
      pathMatch: "full",
      component: HomeComponent
    },
    {
      path: 'all-recipes',
      component: RecipesAllComponent
    },
    {
      path: 'about-us',
      component: AboutUsComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'create-recipe',
      component: RecipeCreateComponent
    },
    {
      path: 'recipe-meat',
      component: CategoryMeatListComponent
    }
]


