import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fruits-products',
  templateUrl: './fruits-products.component.html',
  styleUrls: ['./fruits-products.component.css']
})
export class FruitsProductsComponent {

    product = '';

  @Output() newItemEvent = new EventEmitter<string>();


    saveData(event: any){
    this.product = event.target.value
     console.log(this.product)
    this.newItemEvent.emit(this.product);
  }

  ngOnDestroy() {
      console.log("ngOnDestroy called.....");
  }
}
