import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from "@agm/core";


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


// Plugins
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Partials
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';

// Views
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HrAppComponent } from './views/hr-app/hr-app.component';
import { GoComponent } from './views/go/go.component';
import { App2goComponent } from './views/app2go/app2go.component';
import { BlogComponent } from './views/blog/blog.component';
import { ContactComponent } from './views/contact/contact.component';
import { FaqComponent } from './views/faq/faq.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    HrAppComponent,
    GoComponent,
    App2goComponent,
    BlogComponent,
    ContactComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCdTZTR21Sg9hTjF-0Qa-sw21_cLYrQpLI'
    }),
    AngularFontAwesomeModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
