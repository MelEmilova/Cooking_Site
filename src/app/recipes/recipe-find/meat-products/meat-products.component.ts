import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-meat-products',
  templateUrl: './meat-products.component.html',
  styleUrls: ['./meat-products.component.css']
})
export class MeatProductsComponent implements OnDestroy{
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
