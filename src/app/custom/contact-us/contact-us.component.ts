import { Component } from '@angular/core';
import {faUser, faEnvelopeOpen, faPaperPlane} from '@fortawesome/free-regular-svg-icons'


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  // Да го изнеса в самопстоятелен компонент
faUser= faUser;
faEnvelopeOpen = faEnvelopeOpen;
faPaperPlane = faPaperPlane

}
