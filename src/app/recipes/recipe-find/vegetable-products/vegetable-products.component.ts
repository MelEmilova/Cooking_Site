import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vegetable-products',
  templateUrl: './vegetable-products.component.html',
  styleUrls: ['./vegetable-products.component.css']
})
export class VegetableProductsComponent {

  productVegetable : String = '';
  productVegetableList: Array<String> = [];
  finalVegetableList;

  @Output() newItemEvent = new EventEmitter<string>();


    saveData(event: any){
    this.productVegetable = event.target.value
    this.productVegetableList.push(this.productVegetable);
    this.finalVegetableList = this.productVegetableList[this.productVegetableList.length - 1];
    
    this.newItemEvent.emit(this.finalVegetableList);
  }

}
