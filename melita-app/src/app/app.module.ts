import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule for HTTP requests
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';  // Import the AuthService

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],  // Include HttpClientModule
  providers: [AuthService],  // Add AuthService to providers
  bootstrap: [AppComponent],
})
export class AppModule {}
