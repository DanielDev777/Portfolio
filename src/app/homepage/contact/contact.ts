import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ContactForm } from './contact-form/contact-form';

@Component({
  selector: 'app-contact',
  imports: [TranslatePipe, ContactForm],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

}
