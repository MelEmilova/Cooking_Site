import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeModel } from '../models/recipe-details/recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {

  path: string = 'http://localhost:3050/';

  constructor(private http: HttpClient) { }

  // тук адресите трябва да са еднакви със сървъра. Така правим заявките. Те може и да са различни от URL
  getAllRecipe(): Observable<Object> {
    return this.http.get<any>(`${this.path}all-recipes`)
  }
}
