// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [],
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.css'
// })
// export class HeaderComponent {

// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import this if you're using forms
import { RouterModule } from '@angular/router'; // Import this if you're using routing

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // Add necessary imports
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  accountOpen = false;
  helpOpen = false;
  categoriesOpen = false;

  toggleDropdown(menu: string): void {
    this.accountOpen = menu === 'account' ? !this.accountOpen : false;
    this.helpOpen = menu === 'help' ? !this.helpOpen : false;
    this.categoriesOpen = menu === 'categories' ? !this.categoriesOpen : false;
  }
}
