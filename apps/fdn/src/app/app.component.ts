import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { trigger, style, transition, animate } from '@angular/animations';
import { SigninComponent } from './signin/signin.component';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { AuthenticationFacade } from './services/authentication.facade';
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
export class AppComponent implements OnInit {
  user$: Observable<firebase.User>;
  page = "Git"
  showSkip = false;
  navOpen = false;
  @ViewChild('title') title: ElementRef;

  constructor(private dialog: MatDialog,
    private auth: AuthenticationFacade,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) {
    this.user$ = this.auth.user;
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;
          while (child) {
            if (child.firstChild) {
              child = child.firstChild;
            } else if (child.snapshot.data && child.snapshot.data['title']) {
              return child.snapshot.data['title'];
            } else {
              return null;
            }
          }
          return null;
      })
    ).subscribe(event => {
      this.page = event
    })
  }

  ngOnInit() {
  }

  skipToMain() {
    this.title.nativeElement.focus();
  }

  signin() {
    this.openDialog({
      signin: true
    });
  }
  signup() {
    this.openDialog({
      signup: true
    });
  }
  signout(user) {
    this.openDialog({
      user
    });
  }

  openDialog(data) {
    this.dialog.open(SigninComponent, {
      width: '250px',
      data: data
    });
  }

  checkOpened(event) {
    this.navOpen = event;
  }
}
