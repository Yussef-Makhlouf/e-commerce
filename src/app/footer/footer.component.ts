// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-footer',
//   standalone: true,
//   imports: [],
//   templateUrl: './footer.component.html',
//   styleUrl: './footer.component.css'
// })
// export class FooterComponent {

// }
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule
    
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  email = signal('');
  gender = signal('');
  agreed = signal(false);

  handleSubmit(event: Event) {
    event.preventDefault();
    if (this.email() && this.gender() && this.agreed()) {
      console.log('Newsletter signup:', { email: this.email(), gender: this.gender() });
      alert('Thank you for subscribing!');
    } else {
      alert('Please fill all fields and agree to the terms.');
    }
  }
}
