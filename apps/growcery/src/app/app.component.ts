import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Observable } from 'rxjs';

@Component({
  selector: "fdn-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger('nav', [
      transition('false => true', [
        style({ width: 2 }),
        animate('300ms', style({ width: 6 }))
      ]),
      transition('true => false', [
        style({ width: 6 }),
        animate('300ms', style({ width: 2 }))
      ])
    ]),
  ]
})
export class AppComponent {
  title = 'growcery';
  navOpen = false;
  user$: Observable<string>;

  checkOpened(event) {
    this.navOpen = event;
  }

  signIn() {}
  signUp() {}
  signOut(user) {}
  skipToMain() {}

}
