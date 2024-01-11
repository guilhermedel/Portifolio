import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  faBars = faBars;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  faGithub = faGithub;
  showMenu: boolean = false;

  handleShowMenu() {
    setTimeout(() => {
      this.showMenu = !this.showMenu;
    }, 300);
  }
}
