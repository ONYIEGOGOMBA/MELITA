import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer.model';
import { Subscription } from '../models/subscription.model';
import * as OfferActions from '../store/actions/offer.actions';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  offers$: Observable<Offer[]>;
  subscriptions$: Observable<Subscription[]>;
  refreshCountdown: number | null = null;

  constructor(private store: Store<AppState>) {
    this.offers$ = this.store.select(state => state.offers.offers);
    this.subscriptions$ = this.store.select(state => state.offers.subscriptions);
  }

  ngOnInit(): void {
    this.store.dispatch(OfferActions.loadOffers());
  }

  onRefresh() {
    if (this.refreshCountdown === null) {
      this.refreshCountdown = 10;
      this.store.dispatch(OfferActions.loadOffers());

      const interval = setInterval(() => {
        if (this.refreshCountdown && this.refreshCountdown > 0) {
          this.refreshCountdown -= 1;
        } else {
          clearInterval(interval);
          this.refreshCountdown = null;
        }
      }, 1000);
    }
  }

  onLogout() {
    this.store.dispatch(AuthActions.logout());
  }
}