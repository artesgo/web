import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from '../services/authentication.service';

interface DialogData {
  signin: boolean;
  signup: boolean;
  user: firebase.User;
}

@Component({
  selector: 'fdn-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  login: FormGroup;
  email: FormControl;
  password: FormControl;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SigninComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private auth: AuthenticationService
  ) {
    this.login = fb.group({
      email: this.email,
      password: this.password,
    });

  }

  ngOnInit() {
  }

  signin() {
    const email = this.login.get('email').value;
    const password = this.login.get('password').value;
    if (this.data.signin) {
      this.auth.signIn(email, password).subscribe(signin => this.dialogRef.close());
    } else if (this.data.signup) {
      this.auth.signUp(email, password).subscribe(signin => this.dialogRef.close());
    } else {
      this.auth.signOut().subscribe(signin => this.dialogRef.close());
    }
  }
}
