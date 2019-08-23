import { Component, ViewChild, ElementRef } from "@angular/core";
import { trigger, style, transition, animate } from '@angular/animations';

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
  page = "Git"
  showSkip = false;
  navOpen = false;
  @ViewChild('title') title: ElementRef;

  skipToMain() {
    this.title.nativeElement.focus();
  }
}
