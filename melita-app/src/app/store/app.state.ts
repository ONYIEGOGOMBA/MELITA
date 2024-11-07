import { Offer } from '../models/offer.model';  // Import the Offer model
import { Subscription } from '../models/subscription.model';  // Import the Subscription model

// Define the interface for the application state
export interface AppState {
  auth: AuthState;
  offers: OfferState;
}

// Define the interface for authentication state
export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}

// Define the interface for offers state
export interface OfferState {
  offers: Offer[];  // List of offers
  subscriptions: Subscription[];  // List of subscriptions related to an offer
  loading: boolean;  // Loading status for API calls
}

// Initial state for the AuthState
export const initialAuthState: AuthState = {
  token: null,
  isAuthenticated: false,
};

// Initial state for the OfferState
export const initialOfferState: OfferState = {
  offers: [],
  subscriptions: [],
  loading: false,
};
