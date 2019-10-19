import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'fdn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navOpen = false;
  user$: Observable<string>;
  showSkip = false;
  constructor() { }

  ngOnInit() {
  }

  signIn() {}
  signUp() {}
  signOut(user) {}
  skipToMain() {}
}
