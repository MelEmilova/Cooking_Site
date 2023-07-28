import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pasta-products',
  templateUrl: './pasta-products.component.html',
  styleUrls: ['./pasta-products.component.css']
})
export class PastaProductsComponent {

    product = '';

  @Output() newItemEvent = new EventEmitter<string>();


    saveData(event: any){
    this.product = event.target.value
     console.log(this.product)
    this.newItemEvent.emit(this.product);
  }
}
