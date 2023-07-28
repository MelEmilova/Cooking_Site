import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CKEditorModule } from 'ckeditor4-angular';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { HeaderComponent } from './custom/header/header.component';
import { FooterComponent } from './custom/footer/footer.component';
import { AboutUsComponent } from './custom/about-us/about-us.component';
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
import { RecipeCardComponent } from './recipes/recipes-all/recipe-card/recipe-card.component';
import { CategoryCardComponent } from './recipes/recipes-category/category-card/category-card.component';
import { CategoryMeatListComponent } from './recipes/recipes-category/category-meat-list/category-meat-list.component';
import { CategoryMilkListComponent } from './recipes/recipes-category/category-milk-list/category-milk-list.component';
import { CategoryVegetablesListComponent } from './recipes/recipes-category/category-vegetables-list/category-vegetables-list.component';
import { CategoryLegumesListComponent } from './recipes/recipes-category/category-legumes-list/category-legumes-list.component';
import { RecipesCategoryComponent } from './recipes/recipes-category/recipes-category.component';
import { ContactUsComponent } from './custom/contact-us/contact-us.component';
import { HomeComponent } from './custom/home/home.component'




import {routes} from '../app/app-routing-path'
import { LoadingInterceptor } from './loader/loading.interceptor';
import { NoRecipeComponent } from './custom/no-recipe/no-recipe.component';
import { MeatProductsComponent } from './recipes/recipe-find/meat-products/meat-products.component';
import { VegetableProductsComponent } from './recipes/recipe-find/vegetable-products/vegetable-products.component';
import { DairyProductsComponent } from './recipes/recipe-find/dairy-products/dairy-products.component';
import { LegumesProductsComponent } from './recipes/recipe-find/legumes-products/legumes-products.component';
import { PastaProductsComponent } from './recipes/recipe-find/pasta-products/pasta-products.component';
import { FruitsProductsComponent } from './recipes/recipe-find/fruits-products/fruits-products.component';
import { EggsProductsComponent } from './recipes/recipe-find/eggs-products/eggs-products.component';


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
    RecipesCategoryComponent,
    ContactUsComponent,
    HomeComponent,
    NoRecipeComponent,
    MeatProductsComponent,
    VegetableProductsComponent,
    DairyProductsComponent,
    LegumesProductsComponent,
    PastaProductsComponent,
    FruitsProductsComponent,
    EggsProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    FontAwesomeModule,
    CKEditorModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
     {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
