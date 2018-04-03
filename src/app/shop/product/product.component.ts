import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products = ["shoe","snacks","watch","dress"]
  constructor() { }

  ngOnInit() {
  }
giftme = function(counter) {
  console.log("Buy me this!!!:"+this .products[counter])
}
}
