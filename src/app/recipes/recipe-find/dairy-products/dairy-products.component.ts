import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dairy-products',
  templateUrl: './dairy-products.component.html',
  styleUrls: ['./dairy-products.component.css']
})
export class DairyProductsComponent {

    product = '';

  @Output() newItemEvent = new EventEmitter<string>();


    saveData(event: any){
    this.product = event.target.value
     console.log(this.product)
    this.newItemEvent.emit(this.product);
  }
}
