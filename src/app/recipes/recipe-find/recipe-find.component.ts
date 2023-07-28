import { Component, OnDestroy } from '@angular/core';

  const dataForSearch = {
  allProducts: []
}

@Component({
  selector: 'app-recipe-find',
  templateUrl: './recipe-find.component.html',
  styleUrls: ['./recipe-find.component.css']
})


export class RecipeFindComponent implements OnDestroy{

  searchProducts: Array<String> = [];
  meatCategoryProducts: Array<String> = [];
  meatFinalProduct;
  vegetablesCategoryProducts: Array<String> = [];
  vegetablesFinalProduct;
  dairyCategoryProducts: Array<String> = [];
  dairyFinalProduct;
  legumesCategoryProducts: Array<String> = [];
  legumesFinalProduct;
  pastaCategoryProducts: Array<String> = [];
  pastaFinalProduct;
  fruitsCategoryProducts: Array<String> = [];
  fruitsFinalProduct;
  eggsCategoryProducts: Array<String> = [];
  eggsFinalProduct;



  addMeatProduct(newItem: string) {
    this.meatCategoryProducts.push(newItem)
  }

  addVegetablesProduct(newItem: string) {
    this.vegetablesCategoryProducts.push(newItem)
  }

  addDairyProduct(newItem: string){
    this.dairyCategoryProducts.push(newItem)
  }

  addLegumesProduct(newItem: string){
    this.legumesCategoryProducts.push(newItem)
  }

  addPastaProduct(newItem: string){
    this.pastaCategoryProducts.push(newItem)
  }

  addFruitsProduct(newItem: string){
    this.fruitsCategoryProducts.push(newItem)
  }

    addEggsProduct(newItem: string){
    this.eggsCategoryProducts.push(newItem)
  }
  



  onSelectedProducts(){
    this.meatFinalProduct = this.meatCategoryProducts[this.meatCategoryProducts.length - 1];
    this.searchProducts.push(this.meatFinalProduct);

    this.vegetablesFinalProduct = this.vegetablesCategoryProducts[this.vegetablesCategoryProducts.length - 1];
    this.searchProducts.push(this.vegetablesFinalProduct);

    this.dairyFinalProduct = this.dairyCategoryProducts[this.dairyCategoryProducts.length - 1];
    this.searchProducts.push(this.dairyFinalProduct)

    this.legumesFinalProduct = this.legumesCategoryProducts[this.legumesCategoryProducts.length - 1];
    this.searchProducts.push(this.legumesFinalProduct);

    this.pastaFinalProduct = this.pastaCategoryProducts[this.pastaCategoryProducts.length - 1];
    this.searchProducts.push(this.pastaFinalProduct);

    this.fruitsFinalProduct = this.fruitsCategoryProducts[this.fruitsCategoryProducts.length - 1];
    this.searchProducts.push(this.fruitsFinalProduct);

    this.eggsFinalProduct = this.eggsCategoryProducts[this.eggsCategoryProducts.length - 1];
    this.searchProducts.push(this.eggsFinalProduct);


   dataForSearch.allProducts = this.searchProducts.filter(word => word !== undefined &&  word !== '');
      console.log('dataForSearch', dataForSearch)
  
  }

  ngOnDestroy(): void {
    
  }

}
