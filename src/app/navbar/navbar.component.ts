import { Component, HostListener, OnInit } from '@angular/core';
import { faPlayCircle ,faCompactDisc , faSpinner} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faSpinner=faSpinner;
  faCompactDisc=faCompactDisc;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let navbar = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > navbar.clientHeight) {
      navbar.classList.add('navbar-inverse');
    } else {
      navbar.classList.remove('navbar-inverse');
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
