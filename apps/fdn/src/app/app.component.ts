import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { trigger, style, transition, animate } from '@angular/animations';
import { SigninComponent } from './signin/signin.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from './services/authentication.service';
import { RouterEvent, Router, RouterState, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

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
  user: firebase.User;
  page = "Git"
  showSkip = false;
  navOpen = false;
  @ViewChild('title') title: ElementRef;

  constructor(private dialog: MatDialog,
    private auth: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) {
    // TODO: Ngrx store for user
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
      console.log(event);
      this.page = event
      
    })
  }

  ngOnInit() {
    this.auth.user.subscribe(user => this.user = user);
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
  signout() {
    this.openDialog({
      user: this.user
    });
  }

  openDialog(data) {
    this.dialog.open(SigninComponent, {
      width: '250px',
      data: data
    });
  }
}
