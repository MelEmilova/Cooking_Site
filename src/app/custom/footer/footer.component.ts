import { Component } from '@angular/core';

import {faUser, faEnvelopeOpen, faPaperPlane} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

// Да го изнеса в самопстоятелен компонент
faUser= faUser;
faEnvelopeOpen = faEnvelopeOpen;
faPaperPlane = faPaperPlane

}
