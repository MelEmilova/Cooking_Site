import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-eggs-products',
  templateUrl: './eggs-products.component.html',
  styleUrls: ['./eggs-products.component.css']
})
export class EggsProductsComponent {

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
