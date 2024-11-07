import { createReducer, on } from '@ngrx/store';
import * as OfferActions from '../actions/offer.actions';
import { Offer } from '../../models/offer.model';
import { Subscription } from '../../models/subscription.model';

export interface OfferState {
  offers: Offer[];
  subscriptions: Subscription[];
  error: string | null;
}

export const initialOfferState: OfferState = {
  offers: [],
  subscriptions: [],
  error: null,
};

export const offerReducer = createReducer(
  initialOfferState,
  on(OfferActions.loadOffersSuccess, (state, { offers }) => ({ ...state, offers })),
  on(OfferActions.loadSubscriptionsSuccess, (state, { subscriptions }) => ({ ...state, subscriptions })),
  on(OfferActions.loadOffersFailure, OfferActions.loadSubscriptionsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
