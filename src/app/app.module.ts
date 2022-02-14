import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { initializeApp } from "firebase/app";
import { AngularFireModule,  } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { AppRoutingModule } from './app-routing/app-routing.module';


import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { FeedbackComponent } from './feedback/feedback.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    AppointmentComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    MdbModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  
    AngularFireDatabaseModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,

    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],

  bootstrap: [AppComponent],

})
export class AppModule { }
