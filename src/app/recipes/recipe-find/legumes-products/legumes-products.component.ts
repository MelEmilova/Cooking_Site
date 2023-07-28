import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-legumes-products',
  templateUrl: './legumes-products.component.html',
  styleUrls: ['./legumes-products.component.css']
})
export class LegumesProductsComponent {

    product = '';

  @Output() newItemEvent = new EventEmitter<string>();


    saveData(event: any){
    this.product = event.target.value
     console.log(this.product)
    this.newItemEvent.emit(this.product);
  }
}