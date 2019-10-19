import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireFunctions } from '@angular/fire/functions';

// declare var Stripe; //: stripe.StripeStatic;

@Component({
  selector: 'fdn-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  @Input() amount: number;
  @Input() description: string;
  @ViewChild('cardElement') cardElement: ElementRef;

  // stripe;
  // card;
  cardErrors;
  loading = false;
  confirmation;

  // constructor(private auth: AngularFireAuth, private functions: AngularFireFunctions) { }

  ngOnInit() {
      // this.stripe = Stripe(environment.stripeKey);
      // const elements = this.stripe.elements();
      // this.card = elements.create('card');
      // this.card.mount(this.cardElement.nativeElement);
      // this.card.addEventListener('change', ({error}) => {
      //   console.log('update', error);
      // });
  }

  async handleForm(e) {
    e.preventDefault();
    // const { source, error } = await this.stripe.createSource(this.card);

    // if (error) {
    //   const cardErrors = error.message;
    // } else {
    //   this.loading = true;
      // const user = await this.auth.user.toPromise();
      // const fun = this.functions.httpsCallable('stripeCreateCharge');
      // this.confirmation = await fun({ source: source.id, uid: user.uid, amount: this.amount }).toPromise();
    //   this.loading = false;
    // }
  }
}
