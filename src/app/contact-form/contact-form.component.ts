import { Component } from '@angular/core';
import { alert } from '@nativescript/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  onSendMessage() {
    // Here you would typically send the message to a server
    console.log('Sending message:', { name: this.name, email: this.email, subject: this.subject, message: this.message });
    
    alert({
      title: 'Message Sent',
      message: 'Thank you for contacting us. We will get back to you soon!',
      okButtonText: 'OK'
    });

    // Clear the form
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }
}