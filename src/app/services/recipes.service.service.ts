import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeModel } from '../models/recipe-madels/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  path: string = 'http://localhost:3050/';

  constructor(private http: HttpClient) {}

  // тук адресите трябва да са еднакви със сървъра. Така правим заявките. Те може и да са различни от URL
  getAllRecipe(): Observable<Object> {
    return this.http.get<any>(`${this.path}all-recipes`);
  }
  findRecipeBySelectedProduct(input) {
    return this.http.post(`${this.path}find-recipes`, input);
  }

  getAllMeatRecipes(): Observable<Object> {
    return this.http.get<any>(`${this.path}find-recipe-meat`);
  }
  getAllDairyRecipes(): Observable<Object> {
    return this.http.get<any>(`${this.path}find-recipe-dairy`);
  }
  getAllLegumesRecipes(): Observable<Object> {
    return this.http.get<any>(`${this.path}find-recipe-legumes`);
  }
  getAllVegetablesRecipes(): Observable<Object> {
    return this.http.get<any>(`${this.path}find-recipe-vegetables`);
  }
  getAllFruitsRecipes(): Observable<Object> {
    return this.http.get<any>(`${this.path}find-recipe-fruits`);
  }
  getAllPastaRecipes(): Observable<Object> {
    return this.http.get<any>(`${this.path}find-recipe-pasta`);
  }
  getAllEggsRecipes(): Observable<Object> {
    return this.http.get<any>(`${this.path}find-recipe-eggs`);
  }

  getRecipeDetail(input) {
    return this.http.get(`${this.path}recipe-details/${input}`);
  }

  //  searchRecipe(input){
  //   return this.http.post(`${this.path}find-recipe`, input)
  // }

  // createRecipe(recipeForFetch){
  //   return this.http.post(`${this.path}create-recipe`, recipeForFetch)
  // }

  // createQuontM(quantityMeattModel: productMeatQuantModel){
  //   return this.http.post(`${this.path}create-quantity`, quantityMeattModel)
  // }
  // createQuontV(quantitVegModel: ProductVegetableQuantModel){
  //   return this.http.post(`${this.path}create-quantity`, quantitVegModel)
  // }

  // createQuontD(quantityDairyModel: productDairyQuantModel){
  //   return this.http.post(`${this.path}create-quantity`, quantityDairyModel)
  // }

  // createQuontL(quantityLegumesModel: productLegumesQuantModel){
  //   return this.http.post(`${this.path}create-quantity`, quantityLegumesModel)
  // }

  // getAllProducts(){
  //   return this.http.get<any>(`${this.path}getAll-products`)
  // }

  // getAllDairyRecipes(input) :Observable<Object>{
  //   return this.http.post<any>(`${this.path}find-recipe-dairy`,input)
  // }
}
