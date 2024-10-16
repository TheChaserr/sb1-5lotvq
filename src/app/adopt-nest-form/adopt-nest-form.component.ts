import { Component } from '@angular/core';
import { alert } from '@nativescript/core';

@Component({
  selector: 'app-adopt-nest-form',
  templateUrl: './adopt-nest-form.component.html',
})
export class AdoptNestFormComponent {
  name: string = '';
  email: string = '';
  adoptionLevels: string[] = ['Bronze ($25)', 'Silver ($50)', 'Gold ($100)'];
  selectedLevel: string = 'Bronze ($25)';
  nestName: string = '';

  onAdopt() {
    // Here you would typically process the adoption and send it to a server
    console.log('Processing adoption:', { name: this.name, email: this.email, level: this.selectedLevel, nestName: this.nestName });
    
    alert({
      title: 'Adoption Successful!',
      message: `Thank you for adopting a nest at the ${this.selectedLevel} level${this.nestName ? ` and naming it "${this.nestName}"` : ''}. You'll receive updates about your adopted nest soon!`,
      okButtonText: 'OK'
    });

    // Clear the form
    this.name = '';
    this.email = '';
    this.selectedLevel = 'Bronze ($25)';
    this.nestName = '';
  }
}