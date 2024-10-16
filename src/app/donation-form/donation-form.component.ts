import { Component } from '@angular/core';
import { alert } from '@nativescript/core';

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
})
export class DonationFormComponent {
  amount: string = '';
  frequencies: string[] = ['One-time', 'Monthly', 'Annually'];
  selectedFrequency: string = 'One-time';
  name: string = '';
  email: string = '';

  onDonate() {
    // Here you would typically process the donation through a payment gateway
    console.log('Processing donation:', { amount: this.amount, frequency: this.selectedFrequency, name: this.name, email: this.email });
    
    alert({
      title: 'Thank You!',
      message: `Thank you for your ${this.selectedFrequency.toLowerCase()} donation of $${this.amount}. Your support means a lot to us and the sea turtles!`,
      okButtonText: 'OK'
    });

    // Clear the form
    this.amount = '';
    this.selectedFrequency = 'One-time';
    this.name = '';
    this.email = '';
  }
}