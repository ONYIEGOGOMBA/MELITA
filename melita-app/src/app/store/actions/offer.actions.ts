import { createAction, props } from '@ngrx/store';
import { Offer } from '../../models/offer.model';
import { Subscription } from '../../models/subscription.model';

export const loadOffers = createAction('[Offers] Load Offers');
export const loadOffersSuccess = createAction('[Offers] Load Offers Success', props<{ offers: Offer[] }>());
export const loadOffersFailure = createAction('[Offers] Load Offers Failure', props<{ error: string }>());

export const loadSubscriptions = createAction(
  '[Subscriptions] Load Subscriptions',
  props<{ offerId: number }>()
);
export const loadSubscriptionsSuccess = createAction(
  '[Subscriptions] Load Subscriptions Success',
  props<{ subscriptions: Subscription[] }>()
);
export const loadSubscriptionsFailure = createAction('[Subscriptions] Load Subscriptions Failure', props<{ error: string }>());