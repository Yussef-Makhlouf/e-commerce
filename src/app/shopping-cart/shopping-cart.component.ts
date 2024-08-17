// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-shopping-cart',
//   standalone: true,
//   imports: [],
//   templateUrl: './shopping-cart.component.html',
//   styleUrl: './shopping-cart.component.css'
// })
// export class ShoppingCartComponent {

// }
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor, NgIf } from '@angular/common';
import { MinusIconComponent } from "../minus-icon/minus-icon.component";
import { PlusIconComponent } from "../plus-icon/plus-icon.component";
import { TrashIconComponent } from "../trash-icon/trash-icon.component";

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, MinusIconComponent, PlusIconComponent, TrashIconComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cart = signal<CartItem[]>([
    { id: 1, image: '/placeholder.svg', name: 'Acme Headphones', price: 49.99, quantity: 2 },
    { id: 2, image: '/placeholder.svg', name: 'Jumia T-Shirt', price: 19.99, quantity: 1 },
    { id: 3, image: '/placeholder.svg', name: 'Jumia Backpack', price: 29.99, quantity: 1 },
  ]);
categories: any;
products: any;

  get subtotal() {
    return this.cart().reduce((total, item) => total + item.price * item.quantity, 0);
  }

  get tax() {
    return this.subtotal * 0.1;
  }

  get total() {
    return this.subtotal + this.tax;
  }

  handleQuantityChange(id: number, quantity: number) {
    const updatedItems = this.cart().map((item: CartItem) =>
      item.id === id ? { ...item, quantity } : item
    );
    this.cart.set(updatedItems);  // Set the new array to the signal
  }

  handleRemoveItem(id: number) {
    const updatedItems = this.cart().filter((item: CartItem) => item.id !== id);
    this.cart.set(updatedItems);  // Set the new array to the signal
  }
}

interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}
